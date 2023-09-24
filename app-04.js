const express = require('express')
const port = process.env.PORT || 3000

const app = express()

// http://localhost:3000/?name=mani
app.get('/', (req, res) => {
    res.send('hello ' + req.query.name)
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})