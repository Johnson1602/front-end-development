const express = require("express")
const path = require("path")

const app = express()

// 先拦截所有访问请求，判断是否为静态资源
// 静态资源文件夹最好使用绝对路径
// 可以使用第一个参数自定义静态资源的根路径名
app.use("/static", express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.send("Welcome to homepage.")
})

app.listen(3000)
console.log("server running...")