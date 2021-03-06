const {User} = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res) => {
    // 解构出邮箱和密码
    let {email, password} = req.body

    // 如果邮箱或密码为空或长度过长，则返回错误
    if (email.trim().length == 0 || email.trim().length > 30 || password.trim().length == 0 || password.trim().length > 20) {
        res.status(400).render('admin/error', {
            msg: '用户名或密码错误'
        })
        // 这里记得写 return，不然程序还会继续向下执行，再次 res.send，这就会导致报错
        // Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
        return
    }

    // 验证用户名和密码是否正确
    // 先从数据库中查询出用户信息，使用 email 作为查询的 key
    // 由于数据库操作为异步 API，所以转换为异步函数的形式
    // ES6 规定，如果对象的 key 和 value 值相同，可以只写一个
    let user = await User.findOne({email})
    // 如果使用该email的用户存在
    if (user) {
        // 比对密码是否正确
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            // 密码正确，将用户信息存储在 session 对象中
            req.session.username = user.username
            
            // 将用户信息存储到 app.locals 中，方便所有模版文件访问
            req.app.locals.userInfo = user

            // 重定向到用户页面
            res.redirect('/admin/user')
            // res.send('Welcome back!')
        } else {
            // 密码错误
            res.status(400).render('admin/error', {
                msg: '用户名或密码错误'
            })
        }
    } else {
        // 使用该email的用户不存在
        res.status(400).render('admin/error', {
            msg: '用户名或密码错误'
        })
    }
}