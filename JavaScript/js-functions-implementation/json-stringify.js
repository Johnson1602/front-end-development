function jsonStringify(obj) {
    let type = typeof obj;
    if (type !== "object" || type == null) {
        if (type === 'symbol' || type === 'function' || type === 'undefined') return undefined;
        else if (type === 'string') return `"${obj}"`;
        return String(obj);
    } else {
        // obj 为一个对象
        let json = [],
            arr = obj && obj.constructor === Array;
        // 遍历可枚举属性
        for (let k in obj) {
            let v = obj[k];
            let type = typeof v;
            if (type === 'symbol' || type === 'function' || type === 'undefined') {
                if (arr) v = null;  // 如果在数组中，则值转换为 null
                else continue;      // 如果在对象中，则直接跳过
            } else if (type === "object") {
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}

console.log(jsonStringify({x : 5})) // "{"x":5}"
console.log(jsonStringify([1, "false", false])) // "[1,"false",false]"
console.log(jsonStringify({b: undefined})) // "{}"
