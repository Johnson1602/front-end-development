let arr = [5, 7, 12];
let obj = {
    name: 'Johnson',
    age: 24,
    gender: 'male'
};

for (const prop in arr) {
    console.log(prop);
}

for (const prop in obj) {
    console.log(prop);
}

console.log("==========");

for (const item of arr) {
    console.log(item);
}

console.log("==========");

const iterable = [3, 5, 7];
iterable.foo = 'hello';

console.log(iterable);

console.log("==========");

let map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);
for (const entry of map) {
    console.log(entry);
}