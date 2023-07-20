const express = require('express')
const multer = require('multer')
const path = require('path')

var storedFilePath;

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        // console.log(file)
        const newPath = Date.now() + path.extname(file.originalname)
        storedFilePath = newPath
        cb(null, newPath)
    }
})

const upload = multer({storage: storage})

const router = express.Router()

router.post('/', upload.single('image'), (req, res) => {
    if (storedFilePath == "") res.status(400).json({error: "Es ist ein Felher beim hochladen des Bildes geschehen"})
    res.json({path: storedFilePath})
    storedFilePath = "";
})

module.exports = router