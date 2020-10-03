const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

async function run() {

	let r1 = await readFile('1.txt', 'utf8');
	// 就相当于（暂停下面的程序）
	// readFile('1.txt', 'utf8').then(res => console.log(res));
	let r2 = await readFile('2.txt', 'utf8');
	let r3 = await readFile('3.txt', 'utf8');

	console.log(r1);
	console.log(r2);
	console.log(r3);
}

run();
