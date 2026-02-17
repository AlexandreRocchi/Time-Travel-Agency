import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { CHAT_SYSTEM_INSTRUCTION } from '../constants';

// Initialize the API client
// Note: In a real production app, API keys should be handled via a backend proxy to avoid exposure.
// For this frontend demo, we assume the environment variable is available during build/runtime.
let ai: GoogleGenAI | null = null;
let chatSession: Chat | null = null;

const getAIInstance = () => {
  if (!ai) {
    // If API KEY is missing, we will handle it gracefully in the UI
    const apiKey = process.env.API_KEY || '';
    if (apiKey) {
        ai = new GoogleGenAI({ apiKey });
    }
  }
  return ai;
};

export const initializeChat = async () => {
  const aiInstance = getAIInstance();
  if (!aiInstance) return null;

  try {
    chatSession = aiInstance.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: CHAT_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize chat:", error);
    return null;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "Désolé, mes circuits temporels sont actuellement hors ligne. (API Key manquante ou erreur)";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "Je n'ai pas pu décoder cette trame temporelle.";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    // Reset session on error in case of timeout/invalid state
    chatSession = null;
    return "Une perturbation dans le continuum espace-temps m'empêche de répondre.";
  }
};
