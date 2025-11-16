# Projet Gestion Appareils - Angular + Node.js + MongoDB

## Description
Application full-stack de gestion d'appareils électriques connectés avec Angular (frontend) et Node.js/Express/MongoDB (backend).

## Structure du projet

```
appname/
├── src/                        # Code source Angular
│   ├── app/
│   │   ├── models/            # Modèles de données
│   │   ├── services/          # Services (AppareilService)
│   │   ├── appareil/          # Composant Appareil
│   │   ├── appareil-dashboard/
│   │   ├── appareil-detail/
│   │   ├── authentif/
│   │   ├── welcome/
│   │   ├── contact/
│   │   └── premier/
├── backend/
│   ├── models/               # Modèles MongoDB (Appareil)
│   ├── routes/               # Routes API Express
│   └── public/               # Build Angular (généré)
└── server.js                 # Serveur Node.js/Express
```

## Installation et démarrage

### 1. Prérequis
- Node.js et npm installés
- Angular CLI installé : `npm install -g @angular/cli`

### 2. Installation des dépendances
```bash
npm install
```

### 3. Lancer le frontend (développement Angular)
```bash
ng serve
```
Le frontend sera accessible sur `http://localhost:4200`

### 4. Lancer le backend (serveur Node.js)
Dans un nouveau terminal :
```bash
node server
```
Ou avec nodemon (pour auto-reload) :
```bash
npm install -g nodemon
nodemon server
```
Le backend sera accessible sur `http://localhost:3001`

### 5. Compiler le frontend pour production
Pour générer le build Angular dans le dossier backend/public :
```bash
ng build --output-path backend/public
```
Après cela, le backend servira automatiquement le frontend compilé.

## Fonctionnalités Frontend

### ✅ Partie I - Frontend Angular

1. **Bootstrap intégré** : Navigation, cards, boutons stylisés
2. **Composants créés** :
   - `premier` : Composant de démonstration
   - `appareil` : Affichage d'un appareil avec contrôles
   - `appareil-dashboard` : Liste complète des appareils
   - `welcome` : Page d'accueil
   - `authentif` : Page de login
   - `contact` : Page de contact
   - `appareil-detail` : Détails d'un appareil

3. **Gestion dynamique** :
   - String interpolation
   - Property binding
   - Event binding
   - Two-way binding avec `[(ngModel)]`
   - Directives `*ngFor`, `*ngIf`, `[ngClass]`
   - @Input() et @Output() pour communication entre composants

4. **Service AppareilService** :
   - Centralisation de la logique métier
   - Méthodes pour allumer/éteindre les appareils
   - Support API REST avec HttpClient et Observables

5. **Routing Angular** :
   - Navigation entre pages
   - Routes paramétrées
   - `routerLink` et `routerLinkActive`

## Fonctionnalités Backend

### ✅ Partie II - Backend Node.js/Express

1. **Serveur Express** configuré sur le port 3001
2. **API REST complète** :
   - `GET /api/appareils` : Liste tous les appareils
   - `GET /api/appareils/:id` : Récupère un appareil par ID
   - `POST /api/appareils` : Crée un nouvel appareil
   - `PUT /api/appareils/:id` : Modifie un appareil
   - `DELETE /api/appareils/:id` : Supprime un appareil

3. **Support MongoDB** :
   - Modèle Appareil avec Mongoose
   - Connexion MongoDB Atlas (à configurer)
   - Mode 'local' ou 'mongodb' dans `appareil.route.js`

4. **Middleware** :
   - CORS activé
   - Body-parser pour JSON
   - Serveur de fichiers statiques pour Angular

## Configuration MongoDB Atlas

1. Créez un compte sur [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Créez un cluster gratuit
3. Créez une base de données `appareilsDB` avec une collection `appareils`
4. Récupérez votre chaîne de connexion
5. Dans `server.js`, décommentez et modifiez :
```javascript
mongoose
  .connect(
    "mongodb+srv://VOTRE_USER:VOTRE_PASSWORD@cluster0.rpxl2.mongodb.net/appareilsDB?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
```
6. Dans `backend/routes/appareil.route.js`, changez `const MODE = 'local'` en `const MODE = 'mongodb'`

## Liaison Frontend/Backend

### ✅ Partie III - Intégration

1. **HttpClient configuré** dans `app.module.ts`
2. **Service AppareilService** prêt pour les appels API :
```typescript
// Dans appareil-dashboard.component.ts, remplacez :
this.appareils = this.appareilService.getAppareilsLocal();

// Par :
this.appareilService.getAppareils().subscribe((listAppareils) => {
  this.appareils = listAppareils;
});
```

## Tester l'API

Utilisez Postman ou votre navigateur :
- `GET http://localhost:3001/api/appareils`
- `POST http://localhost:3001/api/appareils` avec body JSON :
```json
{
  "name": "Nouveau appareil",
  "status": "Eteint"
}
```

## Scripts utiles

```bash
# Démarrer le frontend en développement
ng serve

# Démarrer le backend
node server

# Compiler le frontend pour production
ng build --output-path backend/public

# Générer un nouveau composant
ng generate component nom-composant

# Générer un nouveau service
ng generate service services/nom-service
```

## Notes importantes

- Le frontend (port 4200) et le backend (port 3001) fonctionnent indépendamment en développement
- CORS est activé pour permettre la communication entre les deux serveurs
- En production, le backend sert le frontend compilé (un seul serveur)
- Les données sont stockées en mémoire en mode 'local', utilisez MongoDB pour la persistance

## Prochaines étapes

1. Implémenter le composant `appareil-detail` avec les paramètres de route
2. Ajouter l'authentification réelle
3. Créer le formulaire de contact
4. Ajouter plus de fonctionnalités (recherche, filtres, etc.)
5. Déployer l'application (Heroku, Vercel, etc.)

## Auteur
Projet réalisé dans le cadre d'un TP Angular + Node.js
