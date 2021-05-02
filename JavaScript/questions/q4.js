function foo(){
    this.a = 100;
    this.b = 200;
}

function goo(){
    this.c = 300;
    this.d = 400;
} 

var seed = new foo();

foo.prototype.fuss = function(fn) {
    fn.prototype = seed;
    seed = new fn;
    return this;
} 

var a = seed.fuss(goo);

console.log(a.c); // undefined
console.log(a === seed ); // false
console.log(seed.a); // 100