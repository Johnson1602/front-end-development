const express = require("express")

const app = express()

// 创建一级路由对象
const home = express.Router()

// 所有访问 home 的请求都由 home 路由进行处理
app.use("/home", home)

// 创建 home 路由下的二级路由
home.get("/index", (req, res) => {
    res.send("Welcome to home/index/")
})

app.listen(3000)
console.log("server running...")