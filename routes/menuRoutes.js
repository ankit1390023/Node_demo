const express = require('express');
const Menu = require('../models/menu');
const { findByIdAndUpdate } = require('../models/user');
const app = express();
const router = express.Router();
app.use(express.json());


//get api
router.get('/menu', async (req, res) => {
    try {
        const response = await Menu.find();
        console.log("Data fetched Successfully from Menu collection", response);
        res.status(200).json(response);
    } catch (error) {
        console.log("Error while fetching menu details");
        res.status(500).json({ message: "Internal server error" });
    }
})
//get api according to taste
router.get('/menu/:tasteType', async (req, res) => {
    const tasteType = req.params.tasteType;
    try {
        if (["Bitter","Savory","Citrus","Spicy"].includes(tasteType)) {
            let response = await Menu.find({ taste: tasteType });
            console.log("Data fetched successfully from menu collection according to TasteType", response);
            res.status(200).json(response);
        }
    } catch (error) {
        console.log("Error while fetching data according to taste");
        res.status(500).json({ message: "Internal server error" });
    }
})
//Put api
router.put('/menu/:id', async (req, res) => {
    try {
        const menuID = req.params.id;
        const updatedData = req.body;
        let updated = await Menu.findByIdAndUpdate(menuID,updatedData,{ new: true,runValidators:true});
        if (!updated) return res.status(404).json({ message: "Menu not found" });
        console.log("Menu updated Successfully", updated);
        res.status(200).json(updated);
    } catch (error) {
        console.log('Error in Updating menu collection', error);
        res.status(500).json({ message: "Internal Server error" });
    }
})
//delete API
router.delete('/menu/:id', async (req, res) => {
    try {
        const menuId = req.params.id;
        const deleted = await Menu.findByIdAndDelete(menuId);
        if (!deleted) return res.status(404).json({ error: "Menu not found" });
        console.log("Menu details deleted Successfully", deleted);
        res.status(200).json(deleted);
    } catch (error) {
        console.log("Error while deleting menu details", error);
        res.status(500).json({ message: "Internal Server error" });
    }
})
//post api
router.post('/menu', async (req, res) => {
    try {
        const data = req.body;
        const newUser = new Menu(data);
        const response = await newUser.save();
        console.log("Data is saved Successsfully in Menu collection", response);
        res.status(200).json(response);
    } catch (error) {
        console.log("Error while saving data in menu", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
})
module.exports = routes;
//comments added  for testing purpose
