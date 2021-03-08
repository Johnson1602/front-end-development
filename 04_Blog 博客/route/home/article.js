const { Article } = require('../../model/article')

module.exports = async (req, res) => {
    const { id } = req.query

    let article = await Article.findOne({_id: id}).populate('author').lean()

    // res.send(article)
    // return

    res.render('home/article', { article })
}