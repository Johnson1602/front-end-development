const fs = require('fs');

// 按顺序读文件1、2、3
fs.readFile('1.txt', 'utf8', (err, result) => {
	console.log(result);
	fs.readFile('2.txt', 'utf8', (err, result) => {
		console.log(result);
		fs.readFile('3.txt', 'utf8', (err, result) => {
			console.log(result);
		});
	});
});

// 如果直接下面这样写的话就无法保证按顺序打印三个文件的内容
/*
fs.readFile('1.txt', 'utf8', (err, result) => {
	console.log(result);
});

fs.readFile('2.txt', 'utf8', (err, result) => {
	console.log(result);
});

fs.readFile('3.txt', 'utf8', (err, result) => {
	console.log(result);
});
*/
