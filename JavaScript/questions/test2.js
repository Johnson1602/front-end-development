var length = 10;
function fn() {
    console.log(this.length);
}
var obj = {
    length: 5,
    method: function () {
    fn(); // 10
    arguments[0](); // 2
  }
}
obj.method(fn, 1);

var a = {
  b:'b',
  c:function(){
      console.log(this.b)
  }
}
a.c() // b

var aa = {
  b:'b',
  c:()=>{
      console.log(this.b)
  }
}
aa.c()  // undefined

var aaa = {
  b:'b',
  c:function(){
      console.log(this.b)
  }
}
let d = aaa.c
d() // undefined