var b = 10;
var b = 20;
console.log(b);
function fun() {
    var c = 30;
    console.log('inner c: ', c);
}
fun();
// console.log(c);

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, 100);
}

console.log(i);