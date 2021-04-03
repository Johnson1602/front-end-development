/**
 * 手写一个 new 方法
 */

function myNew() {
    // 创建一个空白对象
    const obj = {};
    // 链接空白对象的 __propto__ 和构造函数的 prototype
    const constructor = [].shift.apply(arguments); // 第一个参数为构造函数
    obj.__proto__ = constructor.prototype;
    // 对 obj 调用构造函数，并接收返回值
    const result = constructor.apply(obj, arguments);
    // 如果返回值为对象，则返回这个对象，否则返回 obj
    return typeof result === 'object' ? result : obj;
}

function User(name) {
    this.name = name;
}

User.prototype.getName = function() {
    return this.name;
}

let u = myNew(User, 'Will');
console.log(u);
console.log(u.getName());