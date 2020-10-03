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

// 查找并删除一个 document，返回该 document
// User.findOneAndDelete({ name: '李四' }).then(res => console.log(res));

// 查找并删除多条数据，如果查找条件为空，则删除所有数据，返回删除status
User.deleteMany({}).then(res => console.log(res));
