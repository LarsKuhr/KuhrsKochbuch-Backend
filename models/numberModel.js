const mongoose = require('mongoose')

const Schema = mongoose.Schema

const NumberSchema = new Schema({
    img: [
        Number
    ],
    num: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Number', NumberSchema);