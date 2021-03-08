module.exports = (req, res, next) => {
    // console.log('test----------------------')
    // console.log('in:' + req.url)
    // console.log(req.query)
    // console.log(req.session)
    // 如果已登陆，那就直接重定向到用户页面
    if (req.url == '/login' && req.session.username) {
        // console.log('test----------------------1')
        // console.log('已登陆，跳转')
        if (req.session.role == 'admin') {
            // console.log('test----------------------2')
            res.redirect('/admin/user')
        } else if (req.session.role == 'normal') {
            // console.log('test----------------------3')
            res.redirect('/home')
        }
    } else {
        // 如果未登录，且访问的不是 login 页面，那就重定向到 login 页面
        if (req.path != '/login' && !req.session.username) {
            // console.log('test----------------------4 + ' + req.query)
            // console.log(Object.keys(req.query).length)
            // console.log(req.path)
            // if (Object.keys(req.query).length) {
            //     console.log(req.query)
            //     let queryString = []
            //     for (attr in req.query) {
            //         queryString.push(`${attr}=${req.query.attr}`)
            //     }
            //     res.send(`/admin/login`)
            // } else {
            //     res.redirect('/admin/login')
            // }
            res.redirect('/admin/login')
        } else {
            // console.log('test----------------------5')
            // 如果未登录，但访问的是 login 页面，直接放行
            // res.send(req.url)
            next()
        }
    }
}