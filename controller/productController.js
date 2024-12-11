const Product = require('../models/productModels'); // Adjust the path based on your folder structure

// Controller to handle Product operations
const productController = {
    // Create a new product
    createProduct: async (req, res) => {
        try {
            console.log(req.body); // Debugging line to inspect incoming data
            const { p_name, p_desc, p_quantity, p_price } = req.body;
    
            const product = await Product.create({ p_name, p_desc, p_quantity, p_price });
            res.status(201).json({ success: true, data: product });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },
    

    // Get all products
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.findAll();
            res.status(200).json({ success: true, data: products });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    // Get a product by ID
    getProductById: async (req, res) => {
        try {
            const { id } = req.params;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }
            res.status(200).json({ success: true, data: product });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    // Update a product by ID
    updateProduct: async (req, res) => {
        try {
            const { id } = req.params;
            const { p_name, p_desc, p_quantity, p_price } = req.body;
            const product = await Product.findByPk(id);
            if (!product) {
                return res.status(404).json({ success: false, message: 'Product not found' });
            }
            await product.update({ p_name, p_desc, p_quantity, p_price });
            res.status(200).json({ success: true, data: product });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },

    // Delete a product by ID
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByPk(req.params.id);
            await product.destroy();
            res.status(200).json({ success: true, message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    },
};

module.exports = productController;
