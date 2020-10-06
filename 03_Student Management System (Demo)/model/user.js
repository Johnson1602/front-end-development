const mongoose = require('mongoose');

// 建立学生集合
const Student = mongoose.model('Student', new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 2,
		maxlength: 10
	},
	age: {
		type: Number,
		required: true,
		min: 10,
		max: 25
	},
	sex: {
		type: String,
		required: true
	},
	email: String,
	hobbies: [String],
	college: String,
	enterDate: {
		type: Date,
		default: Date.now
	}
}));

module.exports = Student;
