function fn() {
    console.log(this);
    const a = 10;
    return function() {
        console.log(this);
        console.log(a);
    }
}

// fn(); // Window

const obj = {
    name: 'weiyi',
    age: 24,
    sayHi: function() {
        console.log(this.age);
    }
}

// fn.call(obj); // obj

// const arrowReturn = fn(); // Window
// arrowReturn(); // Window

// const arrowReturnObj = fn.call(obj); // obj
// arrowReturnObj(); // obj

// const functionReturn = fn(); // Window
// functionReturn(); // Window

// const a = 20;
// const functionReturnObj = fn.call(obj); // obj
// functionReturnObj(); // Window

obj.sayHi();
