function instanceOf(left, right) {
    if (typeof left !== 'object' || right == null) {
        return false;
    }

    leftP = left.__proto__;
    rightP = right.prototype;

    while (leftP) {
        if (leftP === rightP) {
            return true;
        }
        leftP = leftP.__proto__;
    }

    return false;
}

const a = [];
const b = {};

function Foo () {}

var c = new Foo()
function Child () {}
function Father() {}
Child.prototype = new Father()
var d = new Child()

console.log(instanceOf(a, Array)) // true
console.log(instanceOf(b, Object)) // true
console.log(instanceOf(b, Array)) // false
console.log(instanceOf(a, Object)) // true
console.log(instanceOf(c, Foo)) // true
console.log(instanceOf(d, Child)) // true
console.log(instanceOf(d, Father)) // true
console.log(instanceOf(123, Object)) // false 
console.log(123 instanceof Object) // false