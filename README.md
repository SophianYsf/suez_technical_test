# Test Technique Suez

Ce projet est composé d'une application avec un frontend et un backend, conteneurisés à l'aide de Docker.

## Prérequis

Avant de démarrer le projet, assurez-vous d'avoir installé les logiciels suivants sur votre machine :

- [Docker](https://www.docker.com/get-started) - Nécessaire pour exécuter les conteneurs Docker.
- Docker Compose - Inclus avec Docker pour les utilisateurs de Windows et Mac.

## Configuration du projet

Le projet utilise Docker Compose pour orchestrer le démarrage des services du frontend et du backend. Voici la structure de base de la configuration dans `docker-compose.yml` :

version: '3.8'
services:
  frontend:
    build: ./frontend
    ports:
      - "4200:4200"
    volumes:
      - ./frontend:/app
      - /app/node_modules
    depends_on:
      - backend

  backend:
    build: ./backend
    ports:
      - "3000:3000"
    volumes:
      - ./backend:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development

## Démarrage du projet
Pour démarrer le projet, ouvrez votre terminal et exécutez les commandes suivantes :

- Naviguez vers le répertoire du projet
cd chemin/vers/votre/projet

- Lancez les conteneurs
docker-compose up --build

Ces commandes construiront (si nécessaire) et démarreront les services. Après l'exécution, le frontend sera accessible via http://localhost:4200 et le backend via http://localhost:3000.

## Arrêt du projet

Pour arrêter et retirer les conteneurs, ouvrez votre terminal et suivez ces étapes :

- Naviguez vers le répertoire du projet
cd chemin/vers/votre/projet

- Arrêtez les conteneurs et nettoyez les ressources
docker-compose down
