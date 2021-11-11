const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://test:1208piyush@cluster0.trqta.mongodb.net/Crud?retryWrites=true&w=majority'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(8000, () => {
    console.log('Server started')
})