const express = require('express')

const app = express()

app.get('/home', (req, res) => {
    res.send('Home')
})

app.get('/login', (req, res) => {
    res.send('Login')
})

app.get('/signup', (req, res) => {
    res.send('Sign Up')
})

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000/")
})