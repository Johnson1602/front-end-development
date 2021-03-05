// 连接数据库
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connected to database "blog"'))
    .catch(() => console.log('Failed to connect to database "blog'))

