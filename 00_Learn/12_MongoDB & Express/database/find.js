const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Succeed'))
	.catch(err => console.log('Failed'));

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
	email: String,
	password: String,
	hobbies: [String]
});

const User = mongoose.model('User', userSchema);

// find all documents in collection 'users'
// User.find().then(result => console.log(result));

// find document with specific _id, return array
/*
User.find({
	_id: '5c09f267aeb04b22f8460968'
})
	.then(result => console.log(result));

// use findOne(), return object
User.findOne({
	name: '赵六'
})
	.then(result => console.log(result));
*/

// 匹配大于小于
/*
User.find({
	age: {
		$gt: 20,
		$lt: 40
	}
})
	.then(result => console.log(result));
*/

// 匹配包含
// User.find({ hobbies: { $in: ['足球'] } }).then(result => console.log(result));

// 选择要查询的字段
// User.find().select('name email -_id').then(result => console.log(result));

// 根据指定字段进行升序排列
// User.find().select('name age').sort('age').then(result => console.log(result));

// 根据指定字段进行降序排列
// User.find().select('age name -_id').sort('-age').then(res => console.log(res));

// skip 跳过数据 limit 限制数据个数
User.find().skip(2).limit(2).then(res => console.log(res));

