const express = require('express');
const path = require('path');
const app = express();

// Middleware
app.use(express.json());

// Serve HTML file from /VIEW on /api/products/html
app.get('/api/products/html', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'products.html'));
});

// All other routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).send("Page not found");
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
