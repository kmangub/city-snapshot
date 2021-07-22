const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dates: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
    },
    url: {
        type: String
    },
    id: {
        type: String
    }
    
})

module.exports = mongoose.model('Restaurant', eventSchema)