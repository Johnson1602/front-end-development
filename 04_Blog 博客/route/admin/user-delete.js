const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // 获取用户 id
    let id = req.query.id
    // 从数据库中删除用户
    await User.findOneAndDelete({_id: id})
    // 重定向回用户页面
    res.redirect('/admin/user')
}