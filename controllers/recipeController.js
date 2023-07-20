const Recipe = require('../models/recipeModel')
const mongoose = require('mongoose')

const createRecipe = async (req, res) => {
    const newRecipe = req.body

    // try to create new Recipe
    try {
        const recipe = await Recipe.create(newRecipe)
        res.status(200).json(recipe)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const findAllRecipes = async (req, res) => {
    const { cat } = req.params
    
    if (cat == "non") {
        const recipes = await Recipe.find()
        res.status(200).json(recipes)
    } else  {
        const recipes = await Recipe.find({categorie: cat})
        if (!recipes) {
            res.status(400).json({})
        }
        res.status(200).json(recipes)
    }
}

const findRecipe = async (req, res) => {
    const { id } = req.params
    if (!checkId(id)) res.status(400).json({error: "Falsche Id"})

    const recipe = await Recipe.findById(id)
    checkRecipe(recipe, res)
}

const deleteRecipe = async (req, res) => {
    const { id } = req.params
    if (!checkId(id)) res.status(400).json({error: "Falsche Id"})

    const deleteRecipe = await Recipe.findOneAndDelete({_id: id})
    checkRecipe(deleteRecipe, res)
}

const updateRecipe = async (req, res) => {
    const { id } = req.params
    if (!checkId(id)) res.status(400).json({error: "Falsche Id"})

    const updatedRecipe = await Recipe.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    checkRecipe(updatedRecipe, res)
}

const checkId = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return false
    }
    return true
}

const checkRecipe = (recipe, res) => {
    if (!recipe) {
        return res.status(400).json({error: 'Kein Rezept mit dieser Id gefunden'})
    }

    res.status(200).json(recipe)
}

module.exports = {
    createRecipe,
    findAllRecipes,
    findRecipe,
    deleteRecipe,
    updateRecipe
}