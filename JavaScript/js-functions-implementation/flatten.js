var arr = [1, [2, [3, 4]]];

// function flatten(arr) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             result = result.concat(flatten(arr[i]));
//         } else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

function flatten(array) {
    if (!Array.isArray(array)) {
        return array;
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
        // 这里一定要用 concat，因为递归结束返回的是一个数组，要将这个数组拼到结果数组后面
        // 不能直接 push，直接 push 的是一个数组，结果会变成 [ 1, [ 2, [ 3, 4 ] ] ]
        result = result.concat(flatten(array[i]));
    }
    return result;
}

console.log(flatten(arr))
