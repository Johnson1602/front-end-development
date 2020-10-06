// 引入创建路由的第三方模块
const getRouter = require('router');
// 引入模板引擎模块
const template = require('art-template');
// 引入处理请求字符串模块
const queryString = require('querystring');
// 引入创建学生集合构造函数的模块
const Student = require('../model/user');

// 获取路由方法
const router = getRouter();

// 创建‘添加学生’页面的路由
router.get('/add', (req, res) => {
	let add = template('index.art', {});
	res.end(add);
});

// 创建‘展示学生列表’页面的路由
router.get('/list', async (req, res) => {
	// 从数据库中拿出所有学生的信息，使用模板引擎进行拼接
	// 由于 find 返回 promise 对象，所以这里使用 await 接收返回值
	let students = await Student.find();
	// console.log(students);
	let list = template('list.art', {
		students: students
	});
	res.end(list);
});

// 如果什么都没写就重定向到 list 页面
router.get('/', (req, res) => {
	res.writeHead(301, {
		Location: '/list'
	});
	res.end();
});

// 创建添加学生的 post 路由
router.post('/add', (req, res) => {
	// 接收数据
	let formData = '';
	req.on('data', chunk => {
		formData += chunk;
	});

	req.on('end', async () => {
		let student = queryString.parse(formData);
		await Student.create(student);
		res.writeHead(301, {
			Location: '/list'
		});
		res.end();
	});
});

module.exports = router;
