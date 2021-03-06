const mongoose = require('mongoose')
const Schema = mongoose.Schema
const eventSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dates: {
        type: String
    },
    start_time: {
        type: String,
    },
    url: {
        type: String
    },
    id: {
        type: String
    },
    user_id : {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('Event', eventSchema)