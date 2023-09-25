const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express()
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render("index-02")
})

app.post('/', (req, res) => {
    const name = req.body.name
    res.send(name)
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})