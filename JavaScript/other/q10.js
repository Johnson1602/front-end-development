var foo = {
    bar: function() { 
        console.log(this); // arguments
        return this.baz; 
    },
    baz: 1
};

(function(){
    console.log(this); // Window
    console.log(arguments); // arguments
    console.log(arguments[0]); // f ()
    console.log(typeof arguments[0]); // function
    console.log(typeof arguments[0]()); // undefined
})(foo.bar);