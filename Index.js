const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const produits = [
  { id: 1, nom: 'Laptop', prix: 1200 },
  { id: 2, nom: 'Smartphone', prix: 800 },
  { id: 3, nom: 'Casque Audio', prix: 150 },
  { id: 4, nom: 'Montre Connectée', prix: 200 },
  { id: 5, nom: 'Tablette', prix: 600 },
  { id: 6, nom: 'Clavier', prix: 50 },
  { id: 7, nom: 'Souris', prix: 30 },
  { id: 8, nom: 'Écran', prix: 300 },
  { id: 9, nom: 'Enceinte Bluetooth', prix: 100 },
  { id: 10, nom: 'Webcam', prix: 75 }
];

app.get('/api/produits', (req, res) => {
  res.json(produits);
});

app.post('/api/produits', (req, res) => {
  const newProduit = { id: produits.length + 1, ...req.body };
  produits.push(newProduit);
  res.json(newProduit);
});

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});