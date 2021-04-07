import express from 'express';
import dotenv from 'dotenv';
import products from './products.js';
import cors from 'cors';
import connectDB from './config/db.js';

const app = express();
dotenv.config();
app.use(cors());
connectDB();
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
