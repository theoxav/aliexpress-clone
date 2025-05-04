# Aliexpress Clone

Aliexpress Clone est une application web moderne développée avec `Nuxt 3`, conçue pour offrir une expérience utilisateur fluide et performante. Ce projet met en avant des fonctionnalités avancées et des technologies de pointe, idéal pour enrichir un portfolio professionnel.

## Fonctionnalités Clés

- **Recherche Dynamique de Produits** : Une fonctionnalité de recherche rapide et intuitive qui interroge la base de données en temps réel.
- **Gestion des Adresses Utilisateur** : Récupération et affichage des adresses associées à un utilisateur spécifique.
- **Authentification Sécurisée** : Intégration de `OAuth` pour une gestion sécurisée des utilisateurs.
- **Paiements en Ligne** : Utilisation de `Stripe` pour gérer les paiements de manière fiable et sécurisée.
- **Base de Données Performante** : Gestion des données avec `Prisma` et `Supabase`, offrant des requêtes optimisées et une intégration fluide avec la base de données.
- **Gestion d'État Réactive** : Implémentation de `Pinia` pour une gestion d'état centralisée et persistante.
- **Interface Moderne** : Conception responsive et élégante grâce à `TailwindCSS`.

## Installation et Configuration

1. **Cloner le Dépôt** :

   ```bash
   git clone https://github.com/votre-repository/aliexpress-clone.git
   ```

2. **Installer les Dépendances** :

   ```bash
   npm install
   ```

3. **Configurer les Variables d'Environnement** :

   Créez un fichier `.env` à la racine du projet et configurez les variables suivantes :

   ```env
   DATABASE_URL=your_database_url
   STRIPE_SECRET_KEY=your_stripe_secret_key
   SUPABASE_URL=your_supabase_url
   SUPABASE_KEY=your_supabase_key
   ```

4. **Lancer le Serveur de Développement** :

   ```bash
   npm run dev
   ```

5. **Générer la Base de Données** :

   ```bash
   npx prisma migrate dev
   ```

## Technologies Utilisées

- ![Nuxt 3](https://img.shields.io/badge/Nuxt-3-%2300C58E?style=flat&logo=nuxt.js&logoColor=white) : Framework Vue.js pour des applications performantes.
- ![Prisma](https://img.shields.io/badge/Prisma-%2300A7E1?style=flat&logo=prisma&logoColor=white) : ORM moderne pour la gestion de base de données.
- ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-%2338B2AC?style=flat&logo=tailwind-css&logoColor=white) : Framework CSS pour un design rapide et responsive.
- ![Pinia](https://img.shields.io/badge/Pinia-%23FEDD00?style=flat&logo=pinia&logoColor=black) : Gestion d'état réactive et centralisée.
- ![TypeScript](https://img.shields.io/badge/TypeScript-%23007ACC?style=flat&logo=typescript&logoColor=white) : Langage typé pour un code robuste.
- ![OAuth](https://img.shields.io/badge/OAuth-%2300A4CC?style=flat&logo=oauth&logoColor=white) : Authentification sécurisée.
- ![Stripe](https://img.shields.io/badge/Stripe-%23646EDE?style=flat&logo=stripe&logoColor=white) : Gestion des paiements en ligne.
- ![Supabase](https://img.shields.io/badge/Supabase-%233FCF8E?style=flat&logo=supabase&logoColor=white) : Backend as a Service pour des fonctionnalités avancées.

## Structure du Projet

- **Frontend** : Développé avec `Nuxt 3` et `TailwindCSS` pour une interface utilisateur moderne.
- **Backend** : Gestion des API avec `Nuxt Server` et intégration de `Prisma` et `Supabase` pour la base de données.
- **Base de Données** : Modélisation et requêtes optimisées avec `Prisma` et `Supabase`.
- **Authentification** : Sécurisée avec `OAuth`.
- **Paiements** : Intégration de `Stripe` pour les transactions.
