var b = 10
function fn() {
    console.log(this.b)
}
c = {
    b: 11,
    fn: fn.bind(window)
}
c.fn()  // 10