// 连接数据库
const mongoose = require('mongoose')
// 使用配置文件
const config = require('config')

mongoose.connect(`mongodb://${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => console.log('Connected to database "blog"'))
    .catch(() => console.log('Failed to connect to database "blog'))
