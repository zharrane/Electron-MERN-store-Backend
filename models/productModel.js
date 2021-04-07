import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    addedByUser: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    codeBar: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: false,
    },
    tva: {
      type: Number,
      required: true,
      default: 0,
    },

    priceOfBuying: {
      type: Number,
      required: true,
      default: 0,
    },
    priceOfReseller: {
      type: Number,
      required: true,
      default: 0,
    },
    priceOfSelling: {
      type: Number,
      required: true,
      default: 0,
    },
    reductionAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
    countItemSold: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
