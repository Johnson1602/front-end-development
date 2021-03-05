const express = require("express")

const app = express()

app.get("/index/:id/:user/:age", (req, res) => {
    res.send(req.params)
})

app.listen(3000)
console.log("server running...")