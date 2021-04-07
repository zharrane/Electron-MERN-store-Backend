import mongoose from 'mongoose';

const Expense = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  atDate: {
    type: Date,
  },
});
