// controllers/productController.js

const addProduct = (req, res) => {
    const { productName } = req.body;

    // Log product data to the server console
    console.log('Product added:', productName);

    // Respond to the client
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
