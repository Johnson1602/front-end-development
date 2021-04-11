/**
 * forEach()
 *  - 按照索引升序的顺序遍历数组
 *  - 遍历的范围在第一次调用 callback 之前就确定了，在 forEach() 开始执行之后添加到数组中的元素不会被访问
 *  - 如果元素在遍历中被修改了，那么 callback 拿到的值将会是 forEach() 访问到该元素时的值
 *  - 如果元素在被 forEach() 访问到之前就被删除了，那该元素不会被访问，直接访问下一个元素
 *  - 如果在访问之后被删除了，例如 shift()，那后面将会有一个元素被跳过
 */

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 1, 5, 2, 4];

// 测试遍历
arr1.forEach(item => {
    console.log(item, this);
})

// 测试 null / undefined / 空
// let arr3 = [1, , 2, undefined, null];
// arr3.forEach(function(item, index) {
//     console.log(item, index);
// })

// 测试是否是按索引升序遍历
// arr2.forEach(item => {
//     console.log(item);
// })

// 测试遍历范围
// arr2.forEach(item => {
//     console.log(item);
//     arr2.push(item);
// })

// 测试删除未访问到的元素
// arr1.forEach((item, index) => {
//     console.log(item, index);
//     if (index === 1) {
//         arr1.splice(2, 1);
//     }
// })

// 测试删除已访问过的元素
// arr1.forEach((item, index) => {
//     console.log(item, index);
//     if (item === 2) {
//         arr1.shift();
//     }
// })


let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

let set = new Set();
set.add(1);
set.add(2);
set.add(3);

map.forEach(value => {
    console.log(value);
})

set.forEach(value => {
    console.log(value);
})