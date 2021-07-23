const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth")
const User = require('../models/user');
const City = require("../models/city");

router.post("/me/cities", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const {name, country} = req.body;
    
    async function addCity() {
        const newCity = new City({
            name: name,
            country: country,
            user_id: user._id
        })

        const doc = await newCity.save()
        res.status(200).send(doc)
    }

    addCity()
        .catch(error => {
            res.status(400).send({message: error})
        })

})

router.delete("/me/cities", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const {_id} = req.body;
    
    async function deleteCity() {
        const city = await City.findById(_id)
        const deleted = await city.remove()
        res.status(200).send(deleted)
    }

    deleteCity()
        .catch(error => {
            res.status(400).send({message: error})
        })

})

module.exports = router;