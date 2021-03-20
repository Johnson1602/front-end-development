// normal function
function printName(name) {
	console.log(name);
}

// arrow function
let printNameArrow = (name) => {
	console.log(name);
}

printName("Johnson");
printNameArrow("Johnson");

console.log(printName);
console.log(printNameArrow);

// another example
function printHi(name) {
	return "Hi " + name;
}

let printHiArrow = name => "Hi " + name;

console.log(printHiArrow("Johnson"));
console.log(printHiArrow);
