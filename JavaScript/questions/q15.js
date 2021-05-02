let a = 100;
function test() {
    console.log(a); // 100
    a = 10;
    console.log(a); // 10
}
test();
console.log(a); // 10