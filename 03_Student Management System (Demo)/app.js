// 引入服务器模块
const http = require('http');
// 引入链接数据库的模块
require('./model/connect');
// 引入模板引擎模块
const template = require('art-template');
// 引入路径解析模块
const path = require('path');
// 引入静态资源处理模块
const serveStatic = require('serve-static');
// 引入格式化时间模块
const dateFormat = require('dateformat');
// 引入路由模块
const router = require('./route/route');

// 设置模板引擎根目录
template.defaults.root = path.join(__dirname, 'views');
// 在模板引擎中引入变量（方法）
template.defaults.imports.dateFormat = dateFormat;
// 获取静态资源访问方法，参数是静态资源的存放位置
const serve = serveStatic(path.join(__dirname, 'public'));

// 建立服务器
const app = http.createServer();

// 服务器绑定事件
app.on('request', (req, res) => {
	// 启用路由
	router(req, res, () => { });
	// 启用静态资源服务
	serve(req, res, () => { });
});

// 监听端口
app.listen(80);
console.log('Server running...');
