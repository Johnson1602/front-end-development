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

// 更新一个文档，第一个参数是查询要更新的文档，第二个参数是更新的内容
// User.updateOne({ name: '李四' }, { name: '李狗蛋' }).then(res => console.log(res));

// 更新多个文档，查询条件为空则更新全部文档
console.log('Before update:\n');
User.find().select('name age -_id').then(res => console.log(res));

User.updateMany({}, { age: 56 }).then(res => console.log(res));

console.log('After update:\n');
User.find().select('name age -_id').then(res => console.log(res));
