const { request, response } = require("express")
const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("Welcome to homepage!")
})

app.get("/list", (req, res) => {
    res.send({name: "Johnson", age: 24})
})

app.listen(3000)
console.log("server running...")