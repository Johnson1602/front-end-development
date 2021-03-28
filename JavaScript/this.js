/**
 * 测试不同情况下 this 的指向
 * 测试结果：
 *  function 关键字定义的函数，this 指向函数的调用者
 *  箭头函数定义的函数，this 指向函数定义位置的 this
 */

function fn() {
    console.log(this);
    const a = 10;
    return function() {
        console.log(this);
        console.log(a);
    }
}

function arrFn() {
    console.log(this);
    const a = 10;
    return () => {
        console.log(this);
        console.log(a);
    }
}

const obj = {
    name: 'weiyi',
    age: 24,
    sayHi: function() {
        console.log(this.age);
    }
}

const objArrow = {
    name: 'weiyi',
    age: 24,
    sayHi: () => {
        console.log(this.age);
    }
}

// fn(); // Window
// fn.call(obj); // obj

// const functionReturn = fn(); // Window
// functionReturn(); // Window 10

// const a = 20;
// const functionReturnObj = fn.call(obj); // obj
// functionReturnObj(); // Window 10

// const arrowReturn = arrFn(); // Window
// arrowReturn(); // Window 10

// const arrowReturnObj = arrFn.call(obj); // obj
// arrowReturnObj(); // obj 10

// obj.sayHi();    // 24
// objArrow.sayHi();   // undefined

const zhangsan = {
	name: '张三',
	sayHi: function() {
		console.log(this); // zhangsan
	},
	wait() {
		setTimeout(function() {
			console.log(this)	// window
		})
	}
}

// zhangsan.sayHi();   // zhangsan
// zhangsan.wait();    // window

const lisi = {
    name: '李四',
    sayHi: () => {
        console.log(this);	// window
    },
    wait: () => {
        setTimeout(() => {
            console.log(this); // lisi
        })
    }
}

lisi.sayHi();   // window
lisi.wait();    // lisi

// const arrReturn = arrFn();  // window
// arrReturn.call(zhangsan);   // window, 10
// const fnReturn = fn();      // window
// fnReturn.call(zhangsan);    // zhangsan, 10