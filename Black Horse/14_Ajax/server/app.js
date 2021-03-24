// 引入express框架
const express = require('express');
// 路径处理模块
const path = require('path');

// 创建web服务器
const app = express();

// 静态资源访问服务功能
app.use(express.static(path.join(__dirname, 'public')));

// 01-load
app.get('/load', (req, res) => {
	res.send('welcome');
})

// 02-request-data
app.get('/request-data', (req, res) => {
	res.send({ "name": "Johnson" })
})

// 03-get-request
app.get('/get-request', (req, res) => {
	res.send(req.query)
})

// 监听端口
app.listen(3000);
// 控制台提示输出
console.log('Starting development server at http://localhost:3000/');