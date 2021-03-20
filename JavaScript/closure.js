// let a;
// for (let i = 0; i < 10; i++) {
//     a = document.createElement('a');
//     a.innerHTML = i + '<br>';
//     a.addEventListener('click', function(e) {
//         e.preventDefault();
//         alert(i);
//     })
//     document.body.appendChild(a);
// }
// console.log(document.body)

// 函数作为返回值
// function create() {
//     const a = 100
//     return function () {
//         console.log(a)
//     }
// }

// const fn = create()
// const a = 200
// fn() // 100

// 函数作为参数被传递
function print(fn) {
    const a = 200
    fn()
}
const a = 100
function fn() {
    console.log(a)
}
print(fn) // 100


