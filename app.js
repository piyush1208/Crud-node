const express = require('express')
const mongoose = require('mongoose')
const url = 'your mongo url'  // paste your mongo url

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
