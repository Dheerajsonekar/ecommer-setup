// controllers/productController.js

const addProduct = (req, res) => {
    const { productName } = req.body;
    res.send(`Product "${productName}" added successfully!`);
};

const getProductById = (req, res) => {
    const productId = req.params.id;
    res.send(`Fetching product with ID: ${productId}`);
};

module.exports = {
    addProduct,
    getProductById
};
