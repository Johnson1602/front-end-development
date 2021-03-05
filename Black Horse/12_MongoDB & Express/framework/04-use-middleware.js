const express = require('express');

const app = express();

// 系统维护
// app.use((req, res, next) => {
// 	res.send("System Maintenance. Come later.")
// })

// 使用中间件判断用户是否登陆，只有登陆才能访问 admin 页面
app.use('/admin', (req, res, next) => {
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

// page not found
app.use((req, res, next) => {
	// if page not found, set http status to 404 (default 200)
	res.status(404).send("Page not found")
})

app.listen(3000);
console.log('Server Running...');
