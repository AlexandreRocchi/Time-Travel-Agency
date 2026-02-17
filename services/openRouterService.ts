// OpenRouter API Service for TimeTravel Agency Chatbot
// Documentation: https://openrouter.ai/docs

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

interface OpenRouterResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  model: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// System prompt définissant la personnalité de Chronos
const SYSTEM_PROMPT = `Tu es l'assistant virtuel de TimeTravel Agency, une agence de voyage temporel de luxe.
Ton nom est Chronos, et tu es un expert passionné d'histoire et de voyages temporels.

TON RÔLE :
- Conseiller les clients sur les meilleures destinations temporelles
- Répondre aux questions sur les destinations, prix et services
- Suggérer des destinations selon les intérêts du client

TON TON :
- Professionnel mais chaleureux
- Passionné d'histoire et enthousiaste
- Expertise en voyage temporel (fictif mais crédible)
- Toujours serviable sans être trop familier

TU CONNAIS PARFAITEMENT CES 3 DESTINATIONS :

1. **Paris 1889 - Lumières de Paris** (Belle Époque)
   - Prix : 2 500 000 ₮ (Tempus)
   - Highlights : Inauguration Tour Eiffel, Exposition Universelle, Moulin Rouge
   - Inclus : Accès VIP Tour Eiffel, Dîner au Moulin Rouge, Costumes d'époque
   - Idéal pour : Amateurs d'art, culture, architecture, romantiques

2. **Crétacé -65M - Royaume des Géants** (Préhistoire)
   - Prix : 4 800 000 ₮
   - Highlights : Observation T-Rex, nature préhistorique, safari dinosaures
   - Inclus : Bulle de protection temporelle, Guide paléontologue, Assurance vie premium
   - Idéal pour : Aventuriers, passionnés de nature, familles (enfants adorent !)

3. **Florence 1504 - Cœur de la Renaissance** (Renaissance italienne)
   - Prix : 3 200 000 ₮
   - Highlights : Michel-Ange, Léonard de Vinci, Médicis, art florentin
   - Inclus : Atelier privé avec un maître, Visite Palazzo Vecchio, Dégustation vins toscans
   - Idéal pour : Amateurs d'art, histoire, gastronomie, culture

SERVICES DE L'AGENCE :
- Bulles de stase quantique (sécurité absolue)
- Costumes, dialectes, monnaie d'époque (immersion totale)
- Ancre temporelle brevetée (retour garanti)
- Guides experts certifiés
- Assurance voyage temporel complète

CONSEILS SELON LES INTÉRÊTS :
- Art & Culture → Florence 1504 ou Paris 1889
- Aventure & Nature → Crétacé -65M
- Romantisme → Paris 1889
- Histoire & Architecture → Florence 1504 ou Paris 1889
- Famille avec enfants → Crétacé -65M (sécurisé)

Si on te demande une destination non disponible, explique poliment que les couloirs temporels sont instables pour ces périodes, mais que nos 3 destinations sont parfaitement sécurisées.

Réponds de manière concise (2-4 phrases max), élégante, et toujours avec enthousiasme pour les voyages temporels.
Utilise des termes liés au temps : "fracture temporelle", "paradoxe", "chronologie", "continuum", "ligne temporelle", etc.`;

class OpenRouterService {
  private apiKey: string;
  private conversationHistory: Message[] = [];
  private readonly apiUrl = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly model = 'openrouter/aurora-alpha'; // Modèle Aurora Alpha

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    // Initialiser avec le system prompt
    this.conversationHistory.push({
      role: 'system',
      content: SYSTEM_PROMPT
    });
  }

  async sendMessage(userMessage: string): Promise<string> {
    try {
      // Ajouter le message de l'utilisateur à l'historique
      this.conversationHistory.push({
        role: 'user',
        content: userMessage
      });

      // Appel à l'API OpenRouter
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
          'HTTP-Referer': window.location.origin,
          'X-Title': 'TimeTravel Agency'
        },
        body: JSON.stringify({
          model: this.model,
          messages: this.conversationHistory,
          temperature: 0.7,
          max_tokens: 300, // Réponses concises
          top_p: 0.9
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('OpenRouter API Error:', errorData);
        throw new Error(`API Error: ${response.status}`);
      }

      const data: OpenRouterResponse = await response.json();
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response from API');
      }

      const assistantMessage = data.choices[0].message.content;

      // Ajouter la réponse à l'historique
      this.conversationHistory.push({
        role: 'assistant',
        content: assistantMessage
      });

      // Limiter l'historique à 20 messages (10 échanges) pour éviter les tokens excessifs
      if (this.conversationHistory.length > 21) { // 1 system + 20 messages
        this.conversationHistory = [
          this.conversationHistory[0], // Garder le system prompt
          ...this.conversationHistory.slice(-20) // Garder les 20 derniers messages
        ];
      }

      return assistantMessage;

    } catch (error) {
      console.error('Error in OpenRouter service:', error);
      
      // Messages d'erreur thématiques
      if (error instanceof TypeError && error.message.includes('fetch')) {
        return "Une perturbation dans le continuum espace-temps m'empêche de répondre. Vérifiez votre connexion réseau.";
      }
      
      return "Désolé, mes circuits temporels sont momentanément perturbés. Réessayez dans quelques instants.";
    }
  }

  // Réinitialiser la conversation
  resetConversation(): void {
    this.conversationHistory = [{
      role: 'system',
      content: SYSTEM_PROMPT
    }];
  }

  // Obtenir l'historique de conversation
  getHistory(): Message[] {
    return this.conversationHistory;
  }
}

// Instance singleton
let openRouterInstance: OpenRouterService | null = null;

export const initializeOpenRouter = (apiKey: string): OpenRouterService => {
  if (!openRouterInstance) {
    openRouterInstance = new OpenRouterService(apiKey);
  }
  return openRouterInstance;
};

export const getOpenRouterInstance = (): OpenRouterService | null => {
  return openRouterInstance;
};

export const sendMessageToOpenRouter = async (message: string): Promise<string> => {
  const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY || '';
  
  if (!apiKey) {
    return "Désolé, mes circuits temporels sont actuellement hors ligne. (Clé API OpenRouter manquante)";
  }

  if (!openRouterInstance) {
    openRouterInstance = initializeOpenRouter(apiKey);
  }

  return await openRouterInstance.sendMessage(message);
};

export default OpenRouterService;
