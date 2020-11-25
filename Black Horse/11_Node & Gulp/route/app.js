// 1. import system module
// 2. create server
// 3. register event on server
// 5. create route
// 4. listen on port 3000

const http = require('http');
const url = require('url');

const app = http.createServer();

app.on('request', (req, res) => {
	// get request method
	const method = req.method.toLowerCase();
	// get request pathname
	const pathname = url.parse(req.url).pathname;

	res.writeHead(200, {
		'content-type': 'text/html;charset=utf8'
	})

	// create route
	if (method == 'get') {
		if (pathname == '/' || pathname == '/index') {
			res.end('Welcome to homepage');
		} else if (pathname == '/list') {
			res.end('Welcome to list page');
		} else {
			res.end('Page not found');
		}
	} else if (method == 'post') {
		if (pathname == '/' || pathname == '/index') {
			res.end('Welcome to homepage');
		} else if (pathname == '/list') {
			res.end('Welcome to list page');
		} else {
			res.end('Page not found');
		}
	}
});

app.listen(3000);
console.log('Server running...');
