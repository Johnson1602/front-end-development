/**
 * 手写节流函数：按固定时间间隔触发事件
 */

const box = document.querySelector('#box');

box.addEventListener('drag', throttle(function(e) {
    console.log(e.offsetX, e.offsetY);
}))

function throttle(fn, delay = 100) {
    let timer = null;
    return function() {
        if (timer) {
            // 如果当前定时器还未执行，则跳过本次触发事件
            return;
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            // 执行完本次响应后将 timer 置空，准备响应下次触发事件
            timer = null;
        }, 100);
    }

    // 这样传递 arguments 也可以
    // return function(arguments) {
    //     if (timer) {
    //         // 如果当前定时器还未执行，则跳过本次触发事件
    //         return;
    //     }
    //     timer = setTimeout(() => {
    //         fn(arguments);
    //         // 执行完本次响应后将 timer 置空，准备响应下次触发事件
    //         timer = null;
    //     }, 100);
    // }
}