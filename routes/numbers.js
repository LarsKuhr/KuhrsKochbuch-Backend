const express = require('express')
const router = express.Router()
const Number = require('../models/numberModel')
const { createNumber, findAllNumbers, deleteAll } = require('../controllers/numberController')
// router.get('/', )

router.post('/', createNumber)

router.get('/', findAllNumbers)

router.delete('/', deleteAll)

module.exports = router