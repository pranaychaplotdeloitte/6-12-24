const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Initialize Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
    }
);

// Database connection function
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        process.exit(1); // Exit the process if unable to connect
    }
};

// Export the function and sequelize instance
module.exports = { connectDB, sequelize };
