const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const productRoutes = require('./routes/productRoutes'); // Adjust the path

const { connectDB } = require('./config/dbMySQL'); // Corrected import path

// Connect to the database
connectDB();

const app = express();

app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.status(200).send('API is running fine');
});

app.use('/api/products', productRoutes); // Link product routes

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
