function foo(a, b) {
    return a + b;
}

console.log(foo.__proto__);

let test = new foo();
console.log(test.__proto__);