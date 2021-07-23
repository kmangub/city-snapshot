const mongoose = require('mongoose')
const Schema = mongoose.Schema
const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    url: {
        type: String
    },
    user_id : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Restaurant', restaurantSchema)