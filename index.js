const express = require('express')
const cors = require('cors')
var bodyParser = require("body-parser");
const { request } = require('express');
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const students =[]

app.post('/', (request, response) => {
    console.log(request.body)
    students.push(request.body)
    response.send()
})

app.get('/students', (request, response) => {
    response.send(students)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})