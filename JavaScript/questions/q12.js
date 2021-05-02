function f() { return f; }

let f1 = new f();

console.log(f1);
console.log(f1 instanceof f); // false

console.log(new f() instanceof f); // false，因为 f() 返回的直接是自己，而不是一个实例对象

