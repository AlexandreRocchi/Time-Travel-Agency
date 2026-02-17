# Étape de build
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# S'assurer que le dossier public existe
RUN mkdir -p public

# Définir les variables d'environnement pour le build
ARG VITE_OPENROUTER_API_KEY
ENV VITE_OPENROUTER_API_KEY=$VITE_OPENROUTER_API_KEY

# Build l'application
RUN npm run build

# Étape de production
FROM node:20-alpine

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer toutes les dépendances (y compris vite pour le preview)
RUN npm install

# Copier les fichiers buildés depuis l'étape de build
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/vite.config.ts ./vite.config.ts
COPY --from=builder /app/public ./public

# Exposer le port
EXPOSE 3000

# Commande pour démarrer l'application en mode preview
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]
