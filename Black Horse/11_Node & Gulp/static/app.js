const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

// create server
const app = http.createServer();
app.on('request', (req, res) => {

	// get request pathname
	let pathname = url.parse(req.url).pathname;
	// set default pathname to '/default.html'
	pathname = pathname == '/' ? '/default.html' : pathname;

	// get absolute pathname on local machine
	let realPath = path.join(__dirname, 'public', pathname);

	// get content type using module 'mime'
	let fileType = mime.getType(realPath);

	// read file and return result
	// 第一个参数：文件路径，第二个参数：读取结束的处理函数（callback）
	fs.readFile(realPath, (error, result) => {
		// read fail
		if (error != null) {
			// return page not found
			res.writeHead(404, {
				'content-type': 'text/html;charset=utf8'
			})
			res.end('<h1>Page not found</h1>');
			console.log(error);

			// end program
			return;
		}

		// return file
		res.writeHead(200, {
			'content-type': fileType
		})
		res.end(result);
	});
});

// listen on port 3000
app.listen(3000);
console.log("server running...");
