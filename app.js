const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware for parsing form data (from Axios POST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api/products', productRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
