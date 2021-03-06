module.exports = (req, res, next) => {
    // console.log(req.url)
    // console.log(req.session)
    // 如果已登陆，那就直接重定向到用户页面
    if (req.url == '/login' && req.session.username) {
        // console.log('已登陆，跳转')
        res.redirect('/admin/user')
    } else {
        // 如果未登录，且访问的不是 login 页面，那就重定向到 login 页面
        if (req.url != '/login' && !req.session.username) {
            res.redirect('/admin/login')
        } else {
            // 如果未登录，但访问的是 login 页面，直接放行
            next()
        }
    }
}