import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

/// @desc   fetch all products
/// @route   GET /api/products
/// @access   public
const getProducts = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {};
  const products = await Product.find({ ...keyword });
  res.json(products);
});

/// @desc   fetch single products
/// @route   GET /api/products/:id
/// @access   public
const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    console.log('ERROR finding product by id');
    res.status(404);
    throw new Error(`Product not found'`);
  }
  res.json(product);
});

/// @desc   fetch single products by Code bar
/// @route   GET /api/products/:codebar
/// @access   public
// const getProductByCodeBar = expressAsyncHandler(async (req, res) => {
//   const product = await Product.findOne({ codeBar: req.params.codebar });
//   if (!product) {
//     console.log('ERROR finding product by id');
//     res.status(404);
//     throw new Error(`Product not found'`);
//   }
//   res.json(product);
// });
export { getProducts, getProductById };
