const { Comment } = require('../../model/comment')

module.exports = async (req, res) => {
    const { aid, uid, content } = req.body
    await Comment.create({
        uid: uid,
        aid: aid,
        content: content,
        time: new Date()
    })
    res.redirect('/home/article?id=' + aid)
}