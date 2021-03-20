function Star(name, age) {
    this.name = name;
    this.age = age;
}

// 直接在 prototype 对象上添加方法
// Star.prototype.sing = function (song) {
//     console.log(song);
// }

// 使用赋值的方式给 prototype 添加方法
Star.prototype = {
    constructor: Star,
    sing: function (song) {
        console.log(song);
    }
}

const john = new Star('Johnson', 24)

// 输出 prototype
// console.log(Star.prototype)
// console.log(john.__proto__)

console.log(john);

john.sing('Hello world');

let arr = [1, 2, 3]
