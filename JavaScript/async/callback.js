// function getData() {
//     // 这是一个异步函数，将会在所有同步操作完成之后进行调用
//     setTimeout(() => {
//         return {
//             msg: 'my data'
//         }
//     }, 1000);
//     // 由于没有定义返回值，所以默认返回 undefined
// }

// 这里直接接收函数的返回值，实际收到的是 undefined
// const result = getData();
// console.log(result);

// 为了能够拿到定时器里面 return 的结果，需要使用 callback 函数进行接收
function getData(callback) {
    setTimeout(() => {
        const result = {
            msg: 'my data'
        };
        callback(result);
    }, 1000);
}

getData(function(result) {
    console.log(result);
})