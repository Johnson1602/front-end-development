// define a function
function sayName() {
	console.log("Hello, I'm Will!");
}

sayName();

// 传递进来的实参个数少于形参个数，没有接受的形参的值将为 undefined
function saySomeName(name, age) {
	console.log(name);
	console.log(age);	// undefined
}

saySomeName("Johnson");

// return value from the function
function returnHello(name) {
	return "Hello " + name;
}

let sayHello = returnHello("Weiyi");
console.log(sayHello);

// callback function
function printVariable(variable) {
	console.log(variable);
}

function printName(name, callback) {
	callback("Hello " + name);
}

printName("Johnson", printVariable);

// another way to pass in a function
printName("Johnson", function (variable) {
	console.log(variable);
});
