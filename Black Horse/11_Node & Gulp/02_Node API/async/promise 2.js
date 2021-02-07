const { rejects } = require('assert');
const fs = require('fs');

function P1() {
	return new Promise((resolve, reject) => {
		fs.readFile('1.txt', 'utf8', (err, result) => {
			resolve(result);
		});
	})
}

function P2() {
	return new Promise((resolve, reject) => {
		fs.readFile('2.txt', 'utf8', (err, result) => {
			resolve(result);
		});
	})
}

function P3() {
	return new Promise((resolve, reject) => {
		fs.readFile('3.txt', 'utf8', (err, result) => {
			resolve(result);
		});
	})
}

P1().then(result1 => {
	console.log(result1);
	return P2();
}).then(result2 => {
	console.log(result2);
	return P3();
}).then(result3 => {
	console.log(result3);
})



