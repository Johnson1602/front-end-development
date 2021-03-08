module.exports = (req, res) => {

    req.app.locals.currentPage = 'article'

    res.render('admin/article-edit')

}