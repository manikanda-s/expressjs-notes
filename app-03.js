const express = require('express')
const port = process.env.PORT || 3000

const app = express()

app.get('/:name', (req, res) => {
    res.send('hello ' + req.params.name)
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`)
})