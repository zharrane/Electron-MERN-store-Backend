import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';
///
const router = express.Router();

/// @desc   fetch all products
/// @route   GET /api/products
/// @access   public
router.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

/// @desc   fetch single products
/// @route   GET /api/products/:id
/// @access   public
router.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
      console.log('ERROR finding product by id');
      res.status(404);
      throw new Error(`Product not found'`);
    }
    res.json(product);
  })
);
export default router;
