// 搭建网站服务器，实现客户端与服务器端的通信
// 连接数据库，创建用户集合，向集合中插入文档
// 当用户访问/list时，将所有用户信息查询出来
// 	实现路由功能
// 	呈现用户列表页面
// 	从数据库中查询用户信息 将用户信息展示在列表中
// 将用户信息和表格HTML进行拼接并将拼接结果响应回客户端
// 当用户访问/add时，呈现表单页面，并实现添加用户信息功能
// 当用户访问/modify时，呈现修改页面，并实现修改用户信息功能
// 	修改用户信息分为两大步骤
// 		1.增加页面路由 呈现页面
// 			1.在点击修改按钮的时候 将用户ID传递到当前页面
// 			2.从数据库中查询当前用户信息 将用户信息展示到页面中
// 		2.实现用户修改功能
// 			1.指定表单的提交地址以及请求方式
// 			2.接受客户端传递过来的修改信息 找到用户 将用户信息更改为最新的
// 当用户访问/delete时，实现用户删除功能

const http = require('http');
const url = require('url');
const mongoose = require('mongoose');

// 创建服务器之前，先连接数据库，默认端口是 27017，可以省略不写
mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Database connect succeeded'))
	.catch(err => console.log('Database connect failed\n', err));

// 创建用户集合 User
const User = mongoose.model('User', new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 20
	},
	age: {
		type: Number,
		min: 18,
		max: 80
	},
	password: {
		type: String,
		required: true,
		min: 6,
		max: 16
	},
	email: {
		type: String,
		required: true
	},
	hobbies: {
		type: [String]
	}
}));

// 创建服务器
const app = http.createServer();

app.on('request', async (req, res) => {
	// 实现路由
	const method = req.method;
	// 使用对象解构拿到不带参数的 pathname
	const { pathname } = url.parse(req.url);

	// 根据请求方式不同进行路由
	if (method == 'GET') {
		// 如果请求方式是 GET
		// 根据请求路径进行路由
		if (pathname == '/' || pathname == '/index') {
			res.writeHead(200, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('<h1>Welcome To Homepage</h1>');
		} else if (pathname == '/list') {
			// 由于这里需要使用到数据库中的数据，所以这里不能直接返回静态资源（html 页面）
			// 所以这里将返回拼接的变量

			// 首先拿到所有用户的数据，使用异步函数的方式进行接收
			let users = await User.find();
			// console.log(users);

			// 下面开始拼接字符串
			// 这是最上面一部分
			let list = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>用户列表</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
			</head>
			<body>
				<div class="container">
					<h6>
						<a href="add.html" class="btn btn-primary">添加用户</a>
					</h6>
					<table class="table table-striped table-bordered">
						<tr>
							<td>用户名</td>
							<td>年龄</td>
							<td>爱好</td>
							<td>邮箱</td>
							<td>操作</td>
						</tr>
			`;

			// 循环拼接每一行数据
			users.forEach(user => {
				// 拼接前半部分
				list += `
				<tr>
					<td>${user.name}</td>
					<td>${user.age}</td>
					<td>
				`;
				// 循环拼接爱好
				user.hobbies.forEach(hobby => {
					list += `
					<span>${hobby}</span>
					`;
				});
				// 拼接后半部分
				list += `
					</td>
					<td>${user.email}</td>
					<td>
						<a href="" class="btn btn-danger btn-xs">删除</a>
						<a href="" class="btn btn-success btn-xs">修改</a>
					</td>
				</tr>
				`;
			});
			
			// 这是最下面一部分
			list += `
					</table>
				</div>
			</body>
			</html>
			`;

			// 返回拼接好的数据
			res.end(list);
		} else {
			res.writeHead(404, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('<h1>Page Not Found</h1>');
		}
	} else if (method == 'POST') {
		// 如果请求方式是 POST
	}
});

app.listen(3000);
console.log('Server running...');
