const parent = function() {
    const result = [];
    const child = ()　=> {  // 这里如果改成 const child = function() {} 结果将会是 [1,2,3]
        for (let num of arguments) {
            result.push(num);
        }
        return result;
    }
    return child(1, 2, 3);
}

const result = parent(4, 5, 6, 7);
console.log(JSON.stringify(result)); // [4,5,6,7]