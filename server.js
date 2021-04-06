const express = require('express');
const app = express();
const products = require('./products');
const dotenv = require('dotenv');

dotenv.config();
var cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('hello from simple server :) Updated');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
