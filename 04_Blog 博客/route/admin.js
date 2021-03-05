const { render } = require('art-template')
const express = require('express')

const admin = express.Router()

admin.get('/login', (req, res) => {
    res.render('admin/login')
})

admin.post('/login', (req, res) => {
    let {email, password} = req.body
    if (email.trim().length == 0 || email.trim().length > 30 || password.trim().length == 0 || password.trim().length > 20) {
        res.status(400).render('admin/error', {
            msg: '用户名或密码错误'
        })
        return
    }
    res.send('Welcome back!')
})

admin.get('/user', (req, res) => {
    res.render('admin/user')
})

module.exports = admin