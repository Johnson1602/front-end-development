module.exports = (req, res) => {
    req.session.destroy(() => {
        // 删除 cookie
        res.clearCookie('connect.sid')
        // 重定向到用户登陆页面
        res.redirect('/admin/login')
    })
}