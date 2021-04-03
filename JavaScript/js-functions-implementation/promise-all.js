/**
 * 手写一个 Promise.all 方法
*/

function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        // 如果传入的参数不是数组，那直接报错
        if (!Array.isArray(promises)) {
            throw new TypeError('params must be an array');
        }
        let counter = 0;
        const len = promises.length;
        const result = new Array(len);
        for (let i = 0; i < len; i++) {
            promise = promises[i];
            Promise.resolve(promise)
            .then(res => {
                counter++;
                result[i] = res;
                if (counter === len) {
                    resolve(result);
                }
            })
            .catch(err => {
                reject(err);
            })
        }
    })
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});

promiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values);
});
