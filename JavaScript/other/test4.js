function foo(){ 
this.a = 100; 
this.b = 200; 
} 

function goo(){ 
this.c = 300; 
this.d = 400; 
} 

var seed = new foo();  //1 

foo.prototype.fuss = function(fn) { 
    fn.prototype = seed; 
    seed = new fn;   //2 
    return this;     //3 
} 

var a = seed.fuss(goo); 

console.log(a.c); 
console.log(a === seed ); 
console.log(seed.a); 