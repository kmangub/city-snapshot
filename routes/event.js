const express = require("express");
const { check, validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();
const auth = require("../middleware/auth")
const User = require('../models/user');
const Event = require("../models/event");


router.post("/me/events", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const {name, dates, start_time, url, id} = req.body;
    console.log(user._id);
    async function addEvent() {
        const newEvent = new Event({
            name: name,
            dates: dates,
            start_time: start_time,
            url: url,
            id: id,
            user_id: user._id
        })
        
        const doc = await newEvent.save()
        res.status(200).send(doc)
    }

    addEvent()
        .catch(error => {
            res.status(400).send({message: error})
        })

})

router.delete("/me/events", auth, async (req, res) => {
    const user = await User.findById(req.user.id);
    const {_id} = req.body;
    
    async function deleteEvent() {
        const event = await Event.findById(_id)
        const deleted = await event.remove()
        res.status(200).send(deleted)
    }

    deleteEvent()
        .catch(error => {
            res.status(400).send({message: error})
        })

})

module.exports = router;