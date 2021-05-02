function flatten(arr) {
    const result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    })
    return result;
}

console.log(flatten([1,[2,[3,4,[10,20]],5]]));

let duparr = [1,1,1,1,3,4,6,3,3,5]
let dedup = [...new Set(duparr)];
let dedup2 = duparr.filter((item, index) => {
    return duparr.indexOf(item) === index;
})
console.log(dedup);
console.log(dedup2);