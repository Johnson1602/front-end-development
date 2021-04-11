console.log([] == ![]) // true https://stackoverflow.com/questions/51549267/why-is-true-in-javascript
console.log([] === ![]) // false
console.log( Function instanceof Object ); // true
console.log( Object instanceof Function ); // true
console.log( (function f(){}).__proto__ === Function.prototype); // true