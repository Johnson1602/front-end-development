Function.prototype.apply1 = function(context = globalThis, arr) {
    context.fn = this;
    let result;
    if (arr) {
        result = context.fn(...arr);
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

var foo = {
    value: 1
}
function bar(name, age) {
    console.log(name)
    console.log(age)
    console.log(this.value);
}
bar.apply1(foo, ['black', '18']) // black 18 1
