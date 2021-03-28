/**
 * 手写防抖函数：在最后一次连续触发事件之后，对事件做出响应
 */

const input = document.querySelector('#input');

// input.addEventListener('keyup', function() {
//     console.log(this.value);
// })

input.addEventListener('keyup', debounce(function() {
    console.log(this.value);
}))

function debounce(fn, delay = 500) {
    // timer 在闭包中，保证安全性
    let timer = null;
    return function() {
        if (timer) {
            // 如果 timer 存在，即已经触发过事件，则清除之前的事件，准备对新的事件重新计时
            clearTimeout(timer);
        }
        // 对新触发的事件重新计时
        timer = setTimeout(() => {
            fn.apply(this, arguments);
            // 经过测试这个清空定时器可以不用写
            timer = null;
        }, delay);
    }
}
