import mongoose from 'mongoose';
import dotenv from 'dotenv';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import Expense from './models/expense.js';
import connectDb from './config/db.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Expense.deleteMany();
    // import users
    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    //
    const sampleProducts = products.map((product) => {
      return { ...product, addedByUser: adminUser };
    });
    await Product.insertMany(sampleProducts);
    console.log(`Data Imported`);
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    await Expense.deleteMany();

    console.log(`Data Destroyed`);
    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
