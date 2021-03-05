const { request } = require("express");

const express = require("express")

const app = express()

app.get("/request", (req, res, next) => {
    req.name = "Johnson"
    next()
})

app.get("/request", (req, res) => {
    res.send(req.name)
})

app.listen(3000)
console.log("server running...")