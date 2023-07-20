// imports
require('dotenv').config(); 

const express = require('express');
const recipeRoutes = require('./routes/recipes');
const mongoose = require('mongoose')
const upload = require('./routes/upload')
const cors = require('cors')

// express app
const app = express(); 

app.use(cors())

app.use('/assets' ,express.static(__dirname + '/images'))
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/images', upload)

// connect to DB
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
        app.listen(process.env.PORT, () => {
            console.log("Listening on port " + process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })

