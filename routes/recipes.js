const express = require('express')
const router = express.Router()
const Recipe = require('../models/recipeModel')
const {
    createRecipe,
    findAllRecipes,
    findRecipe,
    deleteRecipe,
    updateRecipe
} = require('../controllers/recipeController')

router.get('/all/:cat', findAllRecipes)

router.get('/:id', findRecipe)

router.post('/', createRecipe)

router.delete('/:id', deleteRecipe)

router.patch('/:id', updateRecipe)

module.exports = router