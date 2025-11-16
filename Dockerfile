# Dockerfile multi-stage pour Angular + Node.js

# Stage 1: Build Angular
FROM node:18-alpine AS angular-build
WORKDIR /app

# Copier les fichiers package.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le code source Angular
COPY . .

# Builder l'application Angular
RUN npm run build -- --output-path=backend/public

# Stage 2: Node.js Backend
FROM node:18-alpine
WORKDIR /app

# Copier package.json pour les dépendances backend
COPY package*.json ./

# Installer uniquement les dépendances de production
RUN npm install --only=production

# Copier le code backend
COPY server.js ./
COPY backend ./backend

# Copier le build Angular depuis le stage précédent
COPY --from=angular-build /app/backend/public ./backend/public

# Exposer le port
EXPOSE 3001

# Démarrer le serveur
CMD ["node", "server.js"]
