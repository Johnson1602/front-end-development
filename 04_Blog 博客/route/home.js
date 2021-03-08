const express = require('express')

const home = express.Router()

// 博客展示首页
home.get('/', require('./home/index'))

// 文章详情页
home.get('/article', require('./home/article'))

module.exports = home