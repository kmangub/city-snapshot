const mongoose = require('mongoose')
const Schema = mongoose.Schema
const citySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    user_id : {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('City', citySchema)