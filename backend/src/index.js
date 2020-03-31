require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URL,
    {useNewUrlParser: true, useUnifiedTopology: true},
    err => err ? console.log(err) : console.log('Mongo Connected!')
)

const userRouter = require('./routes/userRouter')
const carRouter = require('./routes/carRouter')
const auth = require('./controllers/authController')

app.use('/user', express.json(), userRouter)
app.use('/car', express.json(), auth, carRouter)

app.listen(process.env.PORT, () => console.log('Running...'))