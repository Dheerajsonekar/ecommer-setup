const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

app.use(express.json());

// Product routes
app.use(productRoutes);



app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
