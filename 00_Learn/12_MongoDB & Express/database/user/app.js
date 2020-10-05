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
const querystring = require('querystring');
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
	// 第二个参数 true 代表将数据转化为对象
	const { pathname, query } = url.parse(req.url, true);

	// 根据请求方式不同进行路由
	if (method == 'GET') {
		// 如果请求方式是 GET
		// 根据请求路径进行路由
		console.log('get: ' + req.url);
		if (pathname == '/' || pathname == '/list') {
			// 由于这里需要使用到数据库中的数据，所以这里不能直接返回静态资源（html 页面）
			// 所以这里将返回拼接的变量

			// 首先拿到所有用户的数据
			// find() 方法返回的是一个 promise 对象
			// 这里不使用 then() 的方式处理结果，而使用异步函数 await 的方式进行接收
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
						<a href="/add" class="btn btn-primary">添加用户</a>
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
						<!-- 通过 GET 的方式传递参数 -->
						<a href="/modify?id=${user._id}" class="btn btn-success btn-xs">修改</a>
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
		} else if (pathname == '/add') { 
			let add = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>添加用户</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
			</head>
			<body>
				<div class="container">
					<h3>添加用户</h3>
					<form method="post" action="/add">
					  <div class="form-group">
						<label>用户名</label>
						<input type="text" class="form-control" placeholder="请填写用户名" name="name">
					  </div>
					  <div class="form-group">
						<label>密码</label>
						<input type="password" class="form-control" placeholder="请填写密码" name="password">
					  </div>
					  <div class="form-group">
						<label>年龄</label>
						<input type="text" class="form-control" placeholder="请填写年龄" name="age">
					  </div>
					  <div class="form-group">
						<label>邮箱</label>
						<input type="email" class="form-control" placeholder="请填写邮箱" name="email">
					  </div>
					  <div class="form-group">
						<label>请选择爱好</label>
						<div>
							<label class="checkbox-inline">
							  <input type="checkbox" value="足球" name="hobbies"> 足球
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="篮球" name="hobbies"> 篮球
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="橄榄球" name="hobbies"> 橄榄球
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="敲代码" name="hobbies"> 敲代码
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="抽烟" name="hobbies"> 抽烟
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="喝酒" name="hobbies"> 喝酒
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="烫头" name="hobbies"> 烫头
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="吃饭" name="hobbies"> 吃饭
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="睡觉" name="hobbies"> 睡觉
							</label>
							<label class="checkbox-inline">
							  <input type="checkbox" value="打豆豆" name="hobbies"> 打豆豆
							</label>
						</div>
					  </div>
					  <button type="submit" class="btn btn-primary">添加用户</button>
					</form>
				</div>
			</body>
			</html>
			`;

			res.end(add);
		} else if (pathname == '/modify') {
			// 修改用户数据，同样是拼接字符串的方式返回页面
			console.log(query);
			// 根据传递过来的 _id 值去数据库中查找对应的用户数据
			let user = await User.findOne({ _id: query.id });
			console.log(user);

			const hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头', '吃饭', '睡觉', '打豆豆'];

			// 拼接上半部分
			let modify = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<title>修改用户信息</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
			</head>
			<body>
				<div class="container">
					<h3>修改用户信息</h3>
					<form method="post" action="/modify?id=${user._id}">
					  <div class="form-group">
						<label>用户名</label>
						<input type="text" class="form-control" placeholder="请填写用户名" name="name" value="${user.name}">
					  </div>
					  <div class="form-group">
						<label>密码</label>
						<input type="password" class="form-control" placeholder="请填写密码" name="password" value="${user.password}">
					  </div>
					  <div class="form-group">
						<label>年龄</label>
						<input type="text" class="form-control" placeholder="请填写年龄" name="age" value="${user.age}">
					  </div>
					  <div class="form-group">
						<label>邮箱</label>
						<input type="email" class="form-control" placeholder="请填写邮箱" name="email" value="${user.email}">
					  </div>
					  <div class="form-group">
						<label>请选择爱好</label>
						<div>
			`;

			// 循环拼接 hobbies
			hobbies.forEach(hobby => {
				if (user.hobbies.includes(hobby)) {
					modify += `
					<label class="checkbox-inline">
						<input type="checkbox" value="${hobby}" name="hobbies" checked> ${hobby}
					</label>
					`;
				} else {
					modify += `
					<label class="checkbox-inline">
						<input type="checkbox" value="${hobby}" name="hobbies"> ${hobby}
					</label>
					`;
				}
			});

			// 拼接下半部分
			modify += `
							</div>
						</div>
						<button type="submit" class="btn btn-primary">确认修改</button>
					</form>
				</div>
			</body>
			</html>
			`;

			res.end(modify);
		} else {
			res.writeHead(404, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('<h1>Page Not Found</h1>');
		}
	} else if (method == 'POST') {
		// 如果请求方式是 POST
		console.log('post: ' + req.url);
		if (pathname == '/add') {
			// 添加用户，接收用户提交的信息并添加到数据库中
			// 接收数据，将数据保存在 formData 变量中
			let formData = '';
			req.on('data', chunk => {
				formData += chunk;
			});

			req.on('end', async () => {
				// console.log(formData);
				// 将接收到数据解析为对象
				let user = querystring.parse(formData);
				// console.log(user);
				// 将数据添加到数据库
				// 由于 create() 方法返回的也是 promise 对象
				// 这里使用 await 转换为同步函数执行
				await User.create(user);

				// 数据添加完毕之后，重定向到 list 页面，并结束响应
				res.writeHead(301, {
					Location: '/list'
				});
				res.end();
			});
		} else if (pathname == '/modify') {
			// 修改用户信息
			// 首先接收客户端传过来的表单信息
			let formData = '';
			req.on('data', chunk => {
				formData += chunk;
			});

			req.on('end', async () => {
				let user = querystring.parse(formData);
				// console.log(user);
				// 更新数据库信息，第一个参数是查询规则，第二个参数是修改内容对象
				await User.updateOne({ _id: query.id }, user);
				// 修改完成之后重定向到 list 页面
				res.writeHead(301, {
					Location: '/'
				});
				res.end();
			})
		}
	}
});

app.listen(3000);
console.log('Server running...');
