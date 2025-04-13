const express = require('express');
const app = express();

// Import Routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

// Middleware for parsing JSON bodies
app.use(express.json());

// Use Routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Start server
app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
