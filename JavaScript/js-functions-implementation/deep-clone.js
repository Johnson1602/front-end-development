/**
 * 手写深拷贝
 */
let obj = {
    age: 20,
    address: {
        city: 'citya',
        pro: 'proa'
    },
    arr: [1, 2, 3]
}

function deepClone(obj = {}) {
    // 递归终止
    if (typeof obj !== 'object' || obj == null) {
        return obj;
    }

    // 判断是数组还是对象
    let result;
    if (obj instanceof Array) {
        result = [];
    } else {
        result = {};
    }

    // 递归进行深拷贝
    for (const key in obj) {
        // 保证 key 不是原型的属性
        if (obj.hasOwnProperty(key)) {
            result[key] = deepClone(obj[key]);
        }
    }

    return result;
}

let result = deepClone(obj);
console.log(result);
console.log(obj === result); // false
