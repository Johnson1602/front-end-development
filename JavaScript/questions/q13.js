var x = 1,
    y = 0,
    z = 0;

var add = function (x) {
    return x = x + 1;
}
y = add(x);

function add(x) {
    return x = x + 3;
}
z = add(x);

console.log(x, y, z);