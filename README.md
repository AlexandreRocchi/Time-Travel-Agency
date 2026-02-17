# TimeTravel Agency - Webapp Interactive

Webapp pour une agence de voyage temporel fictive, créée avec IA générative.

## 🛠️ Stack Technique
- React 19 + TypeScript
- Vite
- Framer Motion (animations)
- Lucide React (icônes)
- Google Gemini AI / OpenRouter API
- Docker + Docker Compose

## ✨ Features
- Landing page interactive avec animations
- Galerie de 3 destinations temporelles :
  - Paris 1889 (Belle Époque)
  - Crétacé -65M (Safari Dinosaures)
  - Florence 1504 (Renaissance)
- Chatbot IA conversationnel (Chronos)
- Modal de réservation interactive
- Design moderne avec effets de parallaxe

## 🤖 IA Utilisées
- Code : Bolt.new (Claude 3.5 Sonnet)
- Chatbot : Google Gemini Flash / OpenRouter Aurora Alpha
- Visuels : Midjourney + Runway

## 🚀 Installation

### Prérequis
- Node.js 20+
- npm ou yarn

### Installation locale
```bash
# Cloner le projet
git clone [<repo-url>](https://github.com/AlexandreRocchi/Time-Travel-Agency)

# Installer les dépendances
npm install

# Configurer les variables d'environnement
cp .env.example .env
# Ajouter votre clé API Gemini ou OpenRouter

# Lancer en mode développement
npm run dev
```

### Avec Docker
```bash
# Build et lancement
docker-compose up --build

# Accès : http://localhost:3000
```

## 📄 Licence
Projet pédagogique - M1/M2 Digital & IA
