// 引入服务器模块
const http = require('http');
// 引入链接数据库的模块
require('./model/connect');
// 引入创建学生集合构造函数的模块
const Student = require('./model/user');
// 引入创建路由的第三方模块
const getRouter = require('router');
// 引入模板引擎模块
const template = require('art-template');
// 引入路径解析模块
const path = require('path');
// 引入静态资源处理模块
const serveStatic = require('serve-static');

// 设置模板引擎根目录
template.defaults.root = path.join(__dirname, 'views');
// 获取路由方法
const router = getRouter();
// 获取静态资源访问方法，参数是静态资源的存放位置
const serve = serveStatic(path.join(__dirname, 'public'));

// 创建‘添加学生’页面的路由
router.get('/add', (req, res) => {
	let add = template('index.art', {});
	res.end(add);
});

// 创建‘展示学生列表’页面的路由
router.get('/list', (req, res) => {
	let list = template('list.art', {});
	res.end(list);
});

// 如果什么都没写就重定向到 list 页面
router.get('/', (req, res) => {
	res.writeHead(301, {
		Location: '/list'
	});
	res.end();
});

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
