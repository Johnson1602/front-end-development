var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++;
        var b = 3;
        console.log(b)  // 3
    }
    inner();
}
outer();

(function(){ 
    console.log(typeof arguments);
})();

var foo = { 
bar: function() { return this.baz; }, 
baz: 1 
}; 

(function(){
    console.log(typeof arguments[0]());
})(foo.bar);