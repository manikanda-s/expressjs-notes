const express = require('express')
const path = require('path')
const port = process.env.PORT || 3000

const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})