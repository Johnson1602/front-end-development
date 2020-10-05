const template = require('art-template');
const path = require('path');

// 使用模板引擎时尽量使用绝对路径
let pathName = path.join(__dirname, 'views', 'index.art');

// 使用模板引擎拼接字符串
const html = template(pathName, {
	name: 'Johnson',
	age: 23
})

console.log(html);
