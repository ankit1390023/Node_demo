const express = require('express');
const User = require('../models/user');
const router = express.Router();

//get  
router.get('/:roleType', async (req, res) => {
    const roleType = req.params.roleType;
    try {
        if (roleType == "doctor" || roleType == "engineer" || roleType == "pilot" || roleType == "driver") {
            let response = await User.find({ role: roleType });
            console.log(response);
            res.status(200).json(response);
        }
        else {
            res.status(400).json({ message: "Invalid role type" });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Error while fetching  user data' });
    }
})


router.get('/', async (req, res) => {
    try {
        let response = await User.find();
        console.log(response);
        res.status(200).json(response);
    }
    catch (error) {
        res.status(500).json({ message: 'Error while fetching  user data' });
    }
})






//post API
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new User(data);
        const response = await newUser.save();
        console.log("Date is saved successfully", response);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: 'Error saving  user data' });
    }
})
module.exports = router;