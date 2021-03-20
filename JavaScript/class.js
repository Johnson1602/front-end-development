class Student {
	constructor(name, age) {
		this.nama = name;
		this.age = age;
	}
	sayHi() {
		console.log(`I'm ${name}, and I'm ${age} years old.`);
	}
}

console.log(typeof Student);	// 'function'