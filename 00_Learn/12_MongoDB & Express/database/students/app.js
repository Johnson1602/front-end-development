const http = require('http');
require('./model/connect');
const Student = require('./model/user');

// 建立服务器
const app = http.createServer();

// 服务器绑定事件
app.on('request', (req, res) => {
	res.end('ok');
});

// 监听端口
app.listen(80);
console.log('Server running...');
