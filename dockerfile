# Étape 1 : Build de l'application Angular
FROM node:20 AS build

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances en ignorant les peer deps conflictuels
RUN npm install --legacy-peer-deps

# Copier tout le code source
COPY . .

# Builder l'application Angular en mode production
RUN npm run build -- --output-path=dist

# Étape 2 : Création de l'image finale avec Nginx
FROM nginx:alpine

# Copier le build Angular vers le dossier Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Lancer Nginx en mode foreground
CMD ["nginx", "-g", "daemon off;"
