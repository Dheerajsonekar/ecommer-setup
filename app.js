const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const database = require('./db.js');

// Middleware for parsing form data (from Axios POST)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up routes
app.use('/api/products', productRoutes);

database.connect((err)=>{
  if(err){
    console.log("error is connection ", err);
  }
  else{
    console.log("connected to database");
    const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
  }
})


