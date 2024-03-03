// console.log("A basic demo app for deployment practise.")
require('dotenv').config()

const express = require('express') // CommonJS
// import { express } from 'express' // MouleJS

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Please login to chai aur backend.</h1>')
})

app.get('/random', (req, res) => {
    res.send('<h1>You doing random get request.</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})