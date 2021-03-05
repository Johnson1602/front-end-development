const express = require("express")
const fs = require("fs")
const promisify = require("util").promisify
const readFile = promisify(fs.readFile)

const app = express()

app.get("/", async (req, res, next) => {
    try {
        const result = await readFile("./demo.js")
    } catch (err) {
        next(err)
    }
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen(3000)
console.log("server running...")