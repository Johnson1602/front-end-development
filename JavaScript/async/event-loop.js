console.log('hello');

setTimeout(function cb1() {
    console.log('cb1');
}, 1000);

console.log('bye');

// 在外层作用域无法调用 setTimeout 中定义的函数
// cb1();