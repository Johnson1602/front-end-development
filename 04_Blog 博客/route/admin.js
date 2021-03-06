const express = require('express')

// 创建 admin 路由对象
const admin = express.Router()

// 访问登陆页面
admin.get('/login', require('./admin/loginPage'))

// 用户登陆
admin.post('/login', require('./admin/login'))

// 进入用户页面
admin.get('/user', require('./admin/userPage'))

// 用户退出
admin.get('/logout', require('./admin/logout'))

// 访问添加新用户页面
admin.get('/new-user', require('./admin/newUser'))

// 添加新用户
admin.post('/new-user', require('./admin/newUserAdd'))

module.exports = admin