var b = 1;
function outer() {
    var b = 2
    function inner() {
        b++; // 由于存在变量提升，所以 b 先为 undefined，b++ 变成 NaN
        var b = 3; // 重新赋值为 3
        console.log(b)  // 3
    }
    inner();
}
outer();
