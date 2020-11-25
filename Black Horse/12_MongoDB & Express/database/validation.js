const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Success'))
	.catch(err => console.log('Fail\n', err));

const postSchema = new mongoose.Schema({
	title: {
		type: String,
		// 规定该字段不能为空，为必选项
		required: [true, '请提交文章标题'],
		// 规定最短长度
		minlength: [5, '文章标题最短5个字符'],
		// 规定最大长度
		maxlength: [20, '文章标题最长20个字符'],
		// 清除字符串两端的空格
		trim: true
	},
	age: {
		type: Number,
		min: 18,
		max: 100
	},
	publishDate: {
		type: Date,
		default: Date.now
	},
	category: {
		type: String,
		enum: {
			values: ['html', 'css', 'javascript', 'node.js'],
			message: '请提交正确的分类'
		}
	},
	author: {
		type: String,
		validate: {
			validator: v => {
				return v && v.length > 3;
			},
			message: '请提交长度大于3的作者名称'
		}
	}
});

const Post = mongoose.model('Post', postSchema);

Post.create({ title: 'Post test 3', age: 23, category: 'jquery', author: 'ad' })
	.then(result => console.log(result))
	.catch(error => {
		var err = error.errors;
		for (const attr in err) {
			console.log(err[attr].message);
		}
	});

