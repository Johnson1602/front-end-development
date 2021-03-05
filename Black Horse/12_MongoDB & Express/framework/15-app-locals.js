const express = require("express")
const path = require("path")

const app = express()

// 设置公共的数据
app.locals.users = [{
    name: "Will",
    age: 24
}, {
    name: "Acaia",
    age: 22
}]

// 配置模版引擎
// 设置使用什么模版引擎处理什么后缀的模版文件
app.engine("art", require("express-art-template"))
// 设置模版文件的存放目录
app.set("views", path.join(__dirname, "views"))
// 设置模版文件的默认后缀名
app.set("view engine", "art")

app.get("/index", (req, res) => {
    res.render("index", {
        msg: "homepage rendered by art template"
    })
})

app.get("/list", (req, res) => {
    res.render("list", {
        msg: "list page rendered by art template"
    })
})

app.listen(3000)
console.log("server running...")