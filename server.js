//Add dependencies
const express = require('express');
const bodyParser = require("body-parser");
const user = require("./routes/user");
const city = require("./routes/city")
const event = require("./routes/event")
const restaurant = require("./routes/restaurant")
const InitiateMongoServer = require("./config/db");

const User = require('./models/user')
// Initiate Mongo Server
InitiateMongoServer();

const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());
// Middleware
app.use(bodyParser.json());

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);
app.use("/city", city);
app.use("/event", event);
app.use("/restaurant", restaurant);

//Create a port to listen to
const PORT = process.env.PORT || 3000;

// If the data is not in JSON form, put it in JSON form:
app.use(express.urlencoded({extended: true}));


//Add listener
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})
