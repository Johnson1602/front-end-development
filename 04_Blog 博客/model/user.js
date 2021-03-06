// 创建用户集合
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Joi = require('joi')

// 创建用户集合规则
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        // email 作为登陆凭证，需要保证唯一性
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        // admin 管理员
        // normal 普通用户
        type: String,
        required: true
    },
    status: {
        type: Number,
        // 0 为禁用
        // 1 为启用
        default: 1
    }
})

// 使用用户集合规则创建集合的构造函数
const User = mongoose.model('User', userSchema)

// 新建超级用户
async function createUser() {
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash('123456sobad', salt)

    await User.create({
        username: 'Johnson',
        email: 'johnsonxwy@gmail.com',
        password: pass,
        role: 'admin',
        status: 1
    })
}

// createUser()

// 验证新注册用户数据
const validateUser = user => {
    // 定义请求参数验证规则
    const schema = Joi.object({
        username: Joi.string().min(2).max(15).required().error(new Error('用户名不符合要求')),
        email: Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{10,30}$/).required().error(new Error('密码格式不符合要求')),
        role: Joi.string().valid('admin', 'normal').required().error(new Error('用户角色非法')),
        status: Joi.number().valid(0, 1).required().error(new Error('用户状态非法'))
    })

    return schema.validateAsync(user)
}

// 开放构造函数出去
module.exports = {
    User,    // ES6 规定，如果 key 和 value 相同，可以只写 key，这里就等同于： User: User
    validateUser
}