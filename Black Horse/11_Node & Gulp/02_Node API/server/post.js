// 1. import system module
const http = require('http');
const queryString = require('querystring');

// 2. create server object
const app = http.createServer();

// 3. register event on server object
app.on('request', (req, res) => {

	let postPrarms = '';

	req.on('data', prarms => {
		postPrarms += prarms;
	});

	req.on('end', () => {
		let parsePrarms = queryString.parse(postPrarms);
		console.log(parsePrarms);
	});

	res.end('ok');
});

// 4. listen on port 3000
app.listen(3000);
console.log('Server running...');
