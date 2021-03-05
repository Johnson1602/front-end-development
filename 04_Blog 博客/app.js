// use express framework
const express = require('express')

// import module routes for different parts of the project
const admin = require('./route/admin')
const home = require('./route/home')

// create server
const app = express()

// get all incoming traffic and use module routes
app.use('/home', home)
app.use('/admin', admin)


// not found
app.use((req, res) => {
    res.status(404).send('The resource you are trying to get is not on this server.')
})

// listen on port 3000
app.listen(3000)
console.log('Starting development server at http://localhost:3000/')