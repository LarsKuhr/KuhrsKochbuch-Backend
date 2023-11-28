const mongoose = require('mongoose')
const Number = require('../models/numberModel')

const createNumber = async (req, res) => {
    const newNumber = req.body

    console.log(newNumber)

    try {
        const number = await Number.create(newNumber)
        res.status(200).json(number)
    } catch (error) {
        res.status(400).json({error: error.message,
        number: newNumber})
    }
}

const findAllNumbers = async (req, res) => {
    const numbers = await Number.find()
    if (!numbers) {
        res.status(400).json({})
    }
    res.status(200).json(numbers);
}

const deleteAll = async (req, res) => {
    await Number.deleteMany();
    res.status(200).json("Deleted All")
}

module.exports = {
    createNumber,
    findAllNumbers,
    deleteAll
}