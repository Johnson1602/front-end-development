module.exports = (req, res) => {
    // console.log(req.query)
    let { msg } = req.query
    res.render('admin/user-edit', { msg })
}