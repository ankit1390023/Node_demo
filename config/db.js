const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config(); 

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ankit:Jaunpur123@cluster0.rlaqm.mongodb.net/mydatabase');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
