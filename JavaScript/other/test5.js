function foo(){ 
    this.a = 100; 
    this.b = 200; 
} 

function goo(){ 
    this.c = 300; 
    this.d = 400; 
} 

var seed = new foo();

foo.prototype.fuss2 = function(fn) { 
    fn.prototype = seed; 
    return new fn; 
} 

var a = seed.fuss2(goo); 

if ( "fuss2" in a ) { 
    var b = a.fuss2(foo); 
} 

console.log(Object.prototype.hasOwnProperty.call(a, "a")); 
console.log("b" in a); 
console.log("fuss2" in a); 
console.log("c" in b); 