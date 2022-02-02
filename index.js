const express = require('express')
const cors = require('cors')
var bodyParser = require("body-parser");
const { request, response } = require('express');
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const students =[]

app.post('/', (request, response) => {
    const id = students.length
    console.log(request.body)
    students.push(request.body)
    console.log("User id " + id + " Created ");
    response.send({id})
})

app.get('/student-by-id/:id', (request,response) => {
    const id = request.params.id
    response.send(students[id]);
})

app.get('/students', (request, response) => {
    response.send(students)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})