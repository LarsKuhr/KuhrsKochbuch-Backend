const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ingredientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    unite: {
        type: String,
        required: true
    }
})

const stepSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: false
    },
    ingredients: [
        ingredientSchema
    ],
    steps: [
        stepSchema
    ]
}, { timestamps: true })

module.exports = mongoose.model('Recipe', recipeSchema)