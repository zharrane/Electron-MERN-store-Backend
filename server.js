import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './Middleware/errorMiddleware.js';

////
const app = express();
dotenv.config();
app.use(cors());
connectDB();

app.use('/api/products', productRoutes);

//Middleware page not found
app.use(notFound);

//Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
