// routes/productRoutes.js
const express = require('express');
const path = require('path');
const router = express.Router();
const { addProduct, getProductById } = require('../controllers/productController');

// Serve HTML form
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'VIEW', 'product-form.html'));
});

// Handle form POST using Axios
router.post('/', addProduct);

// Get product by ID
router.get('/:id', getProductById);

module.exports = router;
