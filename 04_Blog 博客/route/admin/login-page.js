module.exports = (req, res) => {

    let articleId = req.query.id
    // console.log(articleId)

    res.render('admin/login', { articleId })
}