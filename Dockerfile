# Utilisez une image Node.js comme base
FROM node:18

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Exposez le port sur lequel votre application s'exécute
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "start"]
