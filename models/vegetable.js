const mongoose = require('mongoose')

//schema

const vegetableSchema = new mongoose.Schema({
    name: {type: String, required: true},
    color: {type: String, require: true},
    readyToEat: Boolean
})

const Vegetable = mongoose.model('Vegetable', vegetableSchema)

module.exports = Vegetable