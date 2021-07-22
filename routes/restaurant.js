const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth")
const User = require('../models/user');
const Restaurant = require("../models/restaurant");


router.post("/me/restaurants", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const {name, address, url} = req.body;
    
    async function addRestaurant() {
        const newRestaurant = new Restaurant({
            name: name,
            address: address,
            url: url,
            user_id: user._id
        })

        const doc = await newRestaurant.save()
        res.status(200).send(doc)
    }

    addRestaurant()
        .catch(error => {
            res.status(400).send({message: error})
        })

})

router.delete("/me/restaurants", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const {_id} = req.body;
    
    async function deleteRestaurant() {
        const restaurant = await Restaurant.findById(_id)
        const deleted = await restaurant.remove()
        res.status(200).send(deleted)
    }

    deleteRestaurant()
        .catch(error => {
            res.status(400).send({message: error})
        })

})

module.exports = router;