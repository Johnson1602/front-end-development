const mongoose = require('mongoose');

// 连接数据库，默认端口是 27017，可以省略不写
mongoose.connect('mongodb://localhost/playground', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})
	.then(() => console.log('Database connect succeeded'))
	.catch(err => console.log('Database connect failed\n', err));
