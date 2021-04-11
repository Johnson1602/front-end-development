Function.prototype.call1 = function(context = globalThis) {
    context.fn = this;
    // const args = [].slice.call(arguments, 1);
    const args = [...arguments].slice(1);
    const result = context.fn(...args);
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
bar.call1(foo, 'black', '18') // black 18 1
