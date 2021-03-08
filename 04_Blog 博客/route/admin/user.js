const { User } = require('../../model/user')

module.exports = async (req, res) => {
    // console.log(req.app)
    // 从数据库中查询所有用户数据
    // let users = await User.find({})
    // 将用户数据传递给模版文件进行渲染
    // res.render('admin/user', { users })

    // 添加自定义属性，用来显示当前是在用户页面
    req.app.locals.currentPage = 'user'

    // 要展示哪一页的数据（默认显示第一页）
    let pageNumber = req.query.page || 1
    // 获取一共有多少条数据
    let userCount = await User.countDocuments({})
    // 设置每页显示多少条数据
    let pageSize = 5
    // 计算需要多少页
    let pageCount = Math.ceil(userCount / pageSize)

    // 计算从哪一条数据开始展示
    let start = (pageNumber - 1) * pageSize

    let users = await User.find({}).limit(pageSize).skip(start)
    res.render('admin/user', {
        users,
        pageNumber,
        pageCount
    })
}