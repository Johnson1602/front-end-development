const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// 首先要拦截所有请求
// 直接交给 bodyParser 进行处理
// bodyParser 会检测是否含有 post 请求参数
// 如果有 post 请求，则会将其转换为对象格式
// 并在 req 中新建 body 属性进行存储
// extended: false 为使用 querystring 内置模块转换请求参数
// extended: true 为使用 qs 内置模块转换请求参数
// 处理完成后自动调用 next() 交由其他路由匹配
app.use(bodyParser.urlencoded({extended: false}))

app.post("/add", (req, res) => {
    res.send(req.body)
})

app.listen(3000)
console.log("server running...")