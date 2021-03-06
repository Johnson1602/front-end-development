const { User, validateUser } = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {

    // 验证请求参数，如果验证成功则继续执行，失败则重定向回编辑页面，并显示错误信息
    try {
        await validateUser(req.body)
    } catch (error) {
        // res.redirect(`/admin/new-user?msg=${error.message}`)
        // 这里要 return 的原因是，在 redirect 方法最后会自动调用 res.end 方法
        // 如果不 return 的话代码还会继续向下执行，而下面还有 res.send，就会导致报错
        // 这其实和 login.js 中的错误是一个类型的
        // return  // 这也可以和上一条代码写在一行中

        // 由于 next 只能接收一个字符串的参数，所以先将重定向的路由以及错误信息转换为字符串
        return next(JSON.stringify({ path: '/admin/new-user', msg: error.message }))
    }

    // 验证邮箱是否已经注册过
    let user = await User.findOne({email: req.body.email})
    if (user) {
        // 已经被注册过，重定向回 user-edit 并提示错误
        // return res.redirect('/admin/new-user?msg=邮箱地址已被注册')
        return next(JSON.stringify({ path: '/admin/new-user', msg: '邮箱地址已被注册' }))
    }

    // 邮箱未被注册，将新用户添加到数据库中
    // 先对密码进行加密
    const salt = await bcrypt.genSalt(10)
    const pass = await bcrypt.hash(req.body.password, salt)
    req.body.password = pass

    await User.create(req.body)

    // 添加新用户后重定向到用户列表页
    res.redirect('/admin/new-user')
}