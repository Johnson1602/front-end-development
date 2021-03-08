const formidable = require('formidable')
const path = require('path')
const { Article } = require('../../model/article')

module.exports = (req, res) => {
    // 创建表单解析对象
    const form = new formidable.IncomingForm()
    // 配置上传文件的存储路径
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')
    // 保留文件后缀名
    form.keepExtensions = true
    // 解析上传请求
    form.parse(req, async (err, fields, files) => {
        // 获取上传的文件的路径
        const coverPath = files.cover.path.split('public')[1]
        // 获取其他请求参数
        const { title, id, publishDate, content } = fields
        // 将数据插入到数据库中
        await Article.create({
            title: title,
            author: id,
            publishDate: publishDate,
            cover: coverPath,
            content: content
        })
        res.redirect('/admin/article')
    })
}