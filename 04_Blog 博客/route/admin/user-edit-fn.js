const { User, validateUser } = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
    // 从 get 请求中获取用户 id
    let id = req.query.id
    // 从 post 请求中获取用户提交的信息
    let { username, email, password, role, status } = req.body
    
    // 从数据库中查询用户
    let user = await User.findOne({_id: id})

    // 验证用户输入的密码是否正确
    let isValid = await bcrypt.compare(password, user.password)
    if (isValid) {
        // 密码正确
        // 先验证用户要修改的信息是否合法
        try {
            await validateUser(req.body)
        } catch (error) {
            return next(JSON.stringify({ path: '/admin/user-edit', msg: error.message, id: id }))
        }
        // 如果要修改的信息合法，那就更新数据库
        await User.updateOne({_id: id}, {
            username,
            email,
            role,
            status
        })
        // 修改成功后重定向到用户页面
        res.redirect('/admin/user')
    } else {
        // 密码错误，交由错误处理中间件处理
        let err = {
            path: '/admin/user-edit',
            msg: '密码错误，请重新输入密码',
            id: id
        }
        next(JSON.stringify(err))
    }
}