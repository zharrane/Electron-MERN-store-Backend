import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
