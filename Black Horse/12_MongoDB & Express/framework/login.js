const express = require('express');

const app = express();

// 使用中间件判断用户是否登陆，只有登陆才能访问 admin 页面
app.get('/admin', (req, res, next) => {
	// 这里先简化用一个变量来存储用户的登陆状态
	let isLogin = true;
	if (isLogin) {
		next();
	} else {
		res.send('Please login to your account');
	}
});

app.get('/admin', (req, res) => {
	res.send('Welcome back');
});

app.listen(3000);
console.log('Server Running...');
