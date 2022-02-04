const express = require('express')
const cors = require('cors')
var bodyParser = require("body-parser");
const { request, response } = require('express');
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())

const students =[]


const stop = setInterval(() => {
    const myDate = new Date()
    const timeRest = new Date()
    timeRest.setHours(timeRest.getHours() + 1)
    timeRest.setMinutes(0)
    timeRest.setSeconds(0)
      countDown = timeRest - myDate
      countDown = countDown / 1000
    if(countDown <= 1){
        while(students.length > 0){
            students.pop()
        }
    }
}, 1000)


app.post('/', (request, response) => {
    const id = students.length
    console.log(request.body)
    students.push(request.body)
    console.log("User id " + id + " Created ");
    response.send({id})
})

app.get('/students', (request, response) => {
    response.send(students)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})