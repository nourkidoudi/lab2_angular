const express = require("express");
const route = express.Router();
const Appareil = require("../models/appareil.model");

// Liste statique pour tester sans MongoDB
let appareilList = [
  { name: "Machine à laver", status: "Eteint" },
  { name: "Tv", status: "Allumé" },
  { name: "Climatiseur", status: "Eteint" },
  { name: "PC", status: "Allumé" },
  { name: "Aspirateur", status: "Eteint" }
];

// Mode de fonctionnement : 'local' ou 'mongodb'
const MODE = 'local'; // Changez en 'mongodb' une fois MongoDB configuré

// GET - Récupérer tous les appareils
route.get("/", (req, res) => {
  if (MODE === 'local') {
    res.status(200).json(appareilList);
  } else {
    Appareil.find()
      .then((appareils) => res.status(200).json(appareils))
      .catch((error) => res.status(400).json({ error }));
  }
});

// GET - Récupérer un appareil par ID
route.get("/:id", (req, res) => {
  if (MODE === 'local') {
    const appareil = appareilList[req.params.id];
    if (appareil) {
      res.status(200).json(appareil);
    } else {
      res.status(404).json({ message: "Appareil non trouvé" });
    }
  } else {
    Appareil.findOne({ _id: req.params.id })
      .then((appareil) => res.status(200).json(appareil))
      .catch((error) => res.status(404).json({ error }));
  }
});

// POST - Créer un nouvel appareil
route.post("/", (req, res) => {
  if (MODE === 'local') {
    const newAppareil = { ...req.body };
    appareilList.push(newAppareil);
    res.status(201).json({ message: "Appareil enregistré !", appareil: newAppareil });
  } else {
    const appareil = new Appareil({
      ...req.body
    });
    appareil
      .save()
      .then(() => res.status(201).json({ message: "Appareil enregistré !" }))
      .catch((error) => res.status(400).json({ error }));
  }
});

// DELETE - Supprimer un appareil
route.delete("/:id", (req, res) => {
  if (MODE === 'local') {
    const index = parseInt(req.params.id);
    if (index >= 0 && index < appareilList.length) {
      appareilList.splice(index, 1);
      res.status(200).json({ message: "Appareil supprimé !" });
    } else {
      res.status(404).json({ message: "Appareil non trouvé" });
    }
  } else {
    Appareil.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Appareil supprimé !" }))
      .catch((error) => res.status(400).json({ error }));
  }
});

// PUT - Modifier un appareil
route.put("/:id", (req, res) => {
  if (MODE === 'local') {
    const index = parseInt(req.params.id);
    if (index >= 0 && index < appareilList.length) {
      appareilList[index] = { ...req.body };
      res.status(200).json({ message: "Appareil modifié !" });
    } else {
      res.status(404).json({ message: "Appareil non trouvé" });
    }
  } else {
    Appareil.updateOne(
      { _id: req.params.id },
      { ...req.body, _id: req.params.id }
    )
      .then(() => res.status(200).json({ message: "Appareil modifié !" }))
      .catch((error) => res.status(400).json({ error }));
  }
});

module.exports = route;
