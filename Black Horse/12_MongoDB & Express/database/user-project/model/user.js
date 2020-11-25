const mongoose = require('mongoose');

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

// 应为在服务器中要用到这里的 User 构造函数，所以在这里将其导出
module.exports = User;
