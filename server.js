const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const routeAppareil = require('./backend/routes/appareil.route');

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://admin:admin123@localhost:27017/appareilsDB?authSource=admin';

if (process.env.NODE_ENV === 'production' || process.env.USE_MONGODB === 'true') {
  mongoose
    .connect(MONGODB_URI)
    .then(() => {
      console.log("✅ Connexion à MongoDB réussie !");
      console.log(`   Database: ${MONGODB_URI.split('/')[3].split('?')[0]}`);
    })
    .catch((error) => {
      console.log("❌ Connexion à MongoDB échouée !");
      console.error("   Erreur:", error.message);
    });
} else {
  console.log("ℹ️  Mode développement - MongoDB désactivé");
  console.log("   Pour activer MongoDB, définissez USE_MONGODB=true");
}

// Routes API
app.use("/api/appareils", routeAppareil);

// Servir les fichiers statiques du frontend Angular
app.use(express.static(path.join(__dirname, "backend/public")));

// Route par défaut pour le routing Angular (doit être en dernier)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "backend/public/index.html"));
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
