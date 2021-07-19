//Add dependencies
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json());

//Create a port to listen to
const PORT = process.env.PORT || 3000;

// If the data is not in JSON form, put it in JSON form:
app.use(express.urlencoded({extended: true}));

//Test Landing Page
app.get('/', (req,res) => {
    res.send('Greetings!')
})

//TODO: Add routes

//Add listener
app.listen(PORT, () => {
    console.log(`Now listening on port ${PORT}`)
})
