const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Connect succeeded'))
	.catch(error => console.log('Connect failed\n', error));

// 创建 User 集合
const User = mongoose.model('User', new mongoose.Schema({
	name: {
		type: String,
		required: true
	}
}));

// 创建 Post 集合，并与 User 集合关联
const Post = mongoose.model('Post', new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		// 与 users 集合关联
		ref: 'User'
	}
}));

// 创建新用户并发布文章
// User.create({ name: 'Johnson' }).then(result => console.log(result));

// Post.deleteMany({}).then(res => console.log(res));
// Post.create({ title: 'Learn MongoDB', author: '5f7a195f7a63d62126d90777' })
// 	.then(res => console.log(res));

// 查找所有 Post
// Post.find().then(result => console.log(result));

// 想看到 author 对应的具体内容
Post.find().populate('author').then(result => console.log(result));
