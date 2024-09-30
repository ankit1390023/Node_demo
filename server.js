const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config();
app.use(express.json());
connectDB();

//import the router files
const userRoutes = require('./routes/userRoutes');
const menuRoutes = require('./routes/menuRoutes');
// use  the router
app.use('/user', userRoutes);
app.use('/', menuRoutes);


const PORT = parseInt(process.env.PORT, 10) || 3000;
console.log(PORT);
app.listen(PORT,() => {

    console.log('Server is running on port', parseInt(process.env.PORT, 10) || 3000);
})