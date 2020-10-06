const mongoose = require('mongoose');

// 连接数据库
mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Database running...'))
	.catch(err => console.log(err));