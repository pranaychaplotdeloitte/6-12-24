const express = require('express');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controller/productController'); // Adjust the path based on your folder structure

const router = express.Router();

// Routes for Product
router.post('/', createProduct); // Create a product
router.get('/', getAllProducts); // Get all products
router.get('/:id', getProductById); // Get a product by ID
router.put('/:id', updateProduct); // Update a product by ID
router.delete('/:id', deleteProduct); // Delete a product by ID

module.exports = router;
