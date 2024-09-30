const express = require('express');
const connectDB = require('./config/db');
const app = express();

app.use(express.json());
connectDB();

//import the router files
const userRoutes = require('./routes/userRoutes');
const menuRoutes = require('./routes/menuRoutes');
// use  the router
app.use('/user', userRoutes);
app.use('/', menuRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})