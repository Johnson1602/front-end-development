const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // console.log(req.query)
    // msg 为编辑用户信息时，提交的用户信息验证不通过时的错误信息
    let { id, msg } = req.query

    // 如果有 id，那就是在编辑用户信息
    if (id) {
        // 从数据库中查询用户
        let user = await User.findOne({_id: id})
        // 渲染编辑用户页面
        res.render('admin/user-edit', {
            msg,
            user,
            link: `/admin/user-edit?id=${id}`,
            button: '确认修改'
        })
    } else {
        // 如果没有 id，那就是在新增用户
        res.render('admin/user-edit', {
            msg,
            link: '/admin/user-add',
            button: '新增用户'
        })
    }
}