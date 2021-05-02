var target = function() {
    return "I am the target";
};

var handler = {
    apply: function(receiver, ...args) {
        return "I am the proxy";
    }
};

var p = new Proxy(target, handler);

console.log(p() === "I am the proxy"); // true