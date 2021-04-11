function isObject(obj) {
    return typeof obj === 'object' && obj != 'null';
}

function isEqual(obj1, obj2) {
    // 如果有一个不是对象类型，直接返回
    if (!isObject(obj1) || !isObject(obj2)) return obj1 === obj2;

    // 如果传入的两个参数是同一个对象，返回 true
    if (obj1 === obj2) return true;

    // 两个参数不是同一个对象，先看属性的个数是否一样
    const prop1 = Object.keys(obj1);
    const prop2 = Object.keys(obj2);
    if (prop1.length !== prop2.length) return false;

    // 属性个数相同时，进行递归比较属性值
    prop1.forEach(prop => {
        if (!isEqual(obj1[prop], obj2[prop])) return false;
    })
    
    return true;
}

obj1 = {
    a: 10,
    b: {
        x: 100,
        y: 200
    }
}

obj2 = {
    a: 10,
    b: {
        x: 100,
        y: 200
    }
}

const result = isEqual(obj1, obj2);
console.log(result);