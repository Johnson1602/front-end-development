const express = require("express")
const fs = require("fs")

const app = express()

// express 错误处理中间件只能捕获同步代码，异步代码需要手动调用 next()
app.get("/", (req, res, next) => {
    // throw new Error("Test error")
    // res.send("ok")
    fs.readFile("./01-introduction.js", (err, result) => {
        if (err) {
            next(err)
        } else {
            res.send(result)
        }
    })
})

// error
app.use((err, req, res, next) => {
    // set http status code to 500 indicating server error
    res.status(500).send(err.message)
})

app.listen(3000)
console.log("server running...")