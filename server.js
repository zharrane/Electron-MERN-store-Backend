import express from 'express';
import { notFound, errorHandler } from './Middleware/errorMiddleware.js';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import userRoute from './routes/userRoute.js';

////
const app = express();
app.use(express.json());

dotenv.config();
app.use(cors());
connectDB();

app.use('/api/products', productRoutes);
app.use('/api/users/', userRoute);
//Middleware page not found
app.use(notFound);

//Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8070;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
