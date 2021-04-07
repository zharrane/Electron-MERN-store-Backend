import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
