// use express framework
const express = require('express')
// 处理文件路径
const path = require('path')
// 处理 post 请求参数
const bodyParser = require('body-parser')
// 处理 cookie 和 session
const session = require('express-session')
const template = require('art-template')
const dateFormat = require('dateformat')
const morgan = require('morgan')
const config = require('config')

// create server
const app = express()
// 连接数据库
require('./model/connect')

// 使用 body-parser 处理 post 请求参数
app.use(bodyParser.urlencoded({extended: false}))
// 使用 express-session 处理 cookie & session
app.use(session({
    secret: 'a strong key',
    saveUninitialized: false,
	cookie: {
		maxAge: 24 * 60 * 60 * 1000
	}
}))

// 配置模版引擎
app.engine('art', require('express-art-template'))  // 使用的模版引擎
app.set('views', path.join(__dirname, 'views'))     // 模版文件的路径
app.set('view engine', 'art')                       // 模版文件默认后缀名
template.defaults.imports.dateFormat = dateFormat

// 开放静态资源
app.use(express.static(path.join(__dirname, 'public')))

// 根据开发环境/生产环境有不同的功能
console.log(config.get('title'))
const nodeEnv = process.env.NODE_ENV
if (nodeEnv == 'development') {
    // 将客户端发送到服务器端的请求信息打印到控制台中
    app.use(morgan('dev'))
}

// import module routes for different parts of the project
const admin = require('./route/admin')
const home = require('./route/home')

// 对没有登陆的用户进行登陆拦截，禁止访问用户页面
app.use('/admin', require('./middleware/loginGuard'))

// 不同的功能交给对应的路由进行处理
app.use('/home', home)
app.use('/admin', admin)

// not found
app.use((req, res) => {
    res.status(404).send('The resource you are trying to get is not on this server.')
})

// 错误处理
app.use((err, req, res, next) => {
    // 由于传递过来的错误的参数个数可能不一样，所以要动态生成 path 后面的参数
    // let { path, msg } = JSON.parse(err)
    // 先将自负串转换为对象
    let errObj = JSON.parse(err)
    let params = []
    for (let attr in errObj) {
        if (attr != 'path') {
            params.push(`${attr}=${errObj[attr]}`)
        }
    }
    res.redirect(`${errObj.path}?${params.join('&')}`)
})

// listen on port 3000
app.listen(3000)
console.log('Starting development server at http://localhost:3000/')