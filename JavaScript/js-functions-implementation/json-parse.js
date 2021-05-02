function jsonParse(str) {
    let fn = new Function('return' + str);
    return fn();
}

let str = jsonStr = '{ "age": 20, "name": "jack" }';
console.log(jsonParse(str));
