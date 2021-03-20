// variable
let a = 1;
let b = 2;
let c = 3;

console.log(a);
console.log(b);
console.log(c);

a = 3;
console.log(a);

// number type
let d = 1.1;
let e = 2.2;
console.log(typeof d);
console.log(d + e); // 3.3000000000000003
console.log(d * e); // 2.4200000000000004
console.log(1.1 * 2.2); // 2.4200000000000004
console.log(1.2 * 2.2); // 2.64

// string type
let name = "Will";
console.log(typeof name);
console.log("Hello, my name is " + name);

// boolean type
let happy = true;
let fun = true;
let sad = false;
console.log(typeof happy);
console.log(happy && fun);
console.log(happy || sad);
console.log(!sad);

// undefined (没有值) and null (有值，值是空) type
// undefined: say that this variable has not been given a value, it's not defined yet
let x = undefined;
console.log(typeof x);
console.log(x);

// null: specifically say that this variable has a value: null
let y = null;
console.log(typeof y);
console.log(y);

console.log(x == y); // true
