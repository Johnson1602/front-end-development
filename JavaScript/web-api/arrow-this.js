/**
 * 测试使用 addEventListener() 注册事件时，使用箭头函数的 this 指向
 * 测试结果：
 *  如果使用箭头函数绑定事件，无法通过 this 获得触发事件的元素
 *  因为箭头函数自身没有 this，其 this 由定义箭头函数的定义位置的 this
 *  所以如果想使用 this 的话，要使用 function 关键字绑定事件
 */

window.a = 10;

const div2 = document.querySelector('#div2');
div2.addEventListener('click', function() {
    console.log(this);  // div2 节点
    console.log(this.id);  // div2
    console.log(this.a);  // undefined
})

div2.addEventListener('click', () => {
    console.log(this);  // window
    console.log(this.id);  // undefined
    console.log(this.a);  // 10
})