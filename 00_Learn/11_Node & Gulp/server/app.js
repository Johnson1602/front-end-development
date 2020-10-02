// 1. 为了创建 http 服务，需要引入系统模块
const http = require('http');
// 引入 url 解析模块
const url = require('url');

// 2. 创建一个服务器对象
const app = http.createServer();

// 3. 创建事件处理函数，当接收到请求时执行
app.on('request', (req, res) => {
	// 3.1. 获取客户端发送的请求类型（GET / POST）并进行相应
	/*
	console.log(req.method);
	if (req.method == 'GET') {
		res.end('GET');
	} else if (req.method == 'POST') {
		res.end('POST');
	}
	*/
	// res.end('<h1>Hello user!</h1>');

	// 3.2. 获取请求 url
	console.log('请求的 URL: ' + req.url);

	// 3.3. 获取请求报文（以键值对对象返回）
	// 可以使用headers['accept']中括号+键的形式获取值
	/*
	console.log(req.headers);
	console.log(req.headers['host']);
	*/
	/*
	{
		host: 'localhost:3000',
		connection: 'keep-alive',
		'cache-control': 'max-age=0',
		'upgrade-insecure-requests': '1',
		'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
		accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*\/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
		'sec-fetch-site': 'none',
		'sec-fetch-mode': 'navigate',
		'sec-fetch-user': '?1',
		'sec-fetch-dest': 'document',
		'accept-encoding': 'gzip, deflate, br',
		'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8'
	}
	*/

	// 3.5. 解析请求参数，第一个参数是要解析的 url，第二个参数是将 query 转化为对象
	// console.log(url.parse(req.url, true).query);
	// 使用对象解构获取请求参数和 pathname
	let {query, pathname} = url.parse(req.url, true);
	// console.log('name: ' + query.name);
	// console.log('age: ' + query.age);

	if (pathname == '/index' || pathname == '/') {
		// 3.4. 返回响应报文，第一个参数为 HTTP 响应码，第二个参数为报文头内容
		res.writeHead(200, {
			'content-type': 'text/html;charset=utf8'
		});
		res.end('<h1>Welcome To Homepage 欢迎来到首页</h1>');
	} else if (pathname == '/list') {
		res.writeHead(200, {
			'content-type': 'text/plain'
		});
		res.end('<h1>Welcome To List Page 欢迎来到列表页</h1>');
	} else {
		res.writeHead(404);
		res.end('Page Not Found');
	}


});

// 4. 监听端口
app.listen(3000);
console.log('服务器运行成功...');
