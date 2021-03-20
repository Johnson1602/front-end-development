// async function fn() {
//     // console.log('test');
//     return 10;
// }

// (async function() {
//     // const result = fn();  // 返回 promise 对象
//     // const result = await fn();  // 返回 10
//     const a = fn();
//     const b = await fn();
//     console.log(a); // promise
//     console.log(b); // 10
// })()

(async function() {
    console.log('start');
    const a = await 100;
    console.log('a', a);
    const b = await Promise.resolve(200);
    console.log('b', b);
    const c = await Promise.reject(300);
    console.log('c', c);
    console.log('end');
})()


// start
// a 100
// b 200

// a = 100
// b = 200

