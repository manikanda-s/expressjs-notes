const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render("index-01", {name:'Manikandan'})
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})