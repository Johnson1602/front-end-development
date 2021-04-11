let arr = [1, 2, 3];

arr.map((item) => {
    console.log(this);
})

arr.map(function(item) {
    console.log(this);
})