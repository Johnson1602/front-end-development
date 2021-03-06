const express = require('express')

// 创建 admin 路由对象
const admin = express.Router()

admin.get('/login', require('./admin/loginPage'))

admin.post('/login', require('./admin/login'))

admin.get('/user', require('./admin/userPage'))

admin.get('/logout', require('./admin/logout'))

module.exports = admin