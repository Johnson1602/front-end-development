const fs = require("fs")
const path = require("path")

let filePath = path.join(__dirname, "hello.js")

console.log(__dirname)
console.log(filePath)

fs.readFile(filePath, "utf8", (err, doc) => {
    console.log(err)
    console.log(doc)
})