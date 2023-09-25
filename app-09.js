const express = require('express')
const port = process.env.port || 3000

app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

let count = 1
let persons = []
app.get('/', (req, res) => {
    res.render('input')
})

app.post('/add', (req, res) => {
    const name = req.body.name
    persons.push({id : count++, name: name})
    console.log(persons)
    res.redirect('/')
})

app.get('/list', (req, res) => {
    res.render('list', {persons:persons})
})

app.get('/edit/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const person = persons.find(person => person.id == id)
    console.log(persons.length, 'person', person)
    res.render('edit', {person:person})
})

app.post('/edit', (req, res) => {
   const id = parseInt(req.body.id)
   const name = req.body.name
   const person = persons.find(person => person.id == id)
   person.name = name
   res.redirect('/list')
})

app.get('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id)
    persons = persons.filter(person => person.id != id)
    res.redirect('/list')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

