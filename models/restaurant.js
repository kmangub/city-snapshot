const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    url: {
        type: String
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)