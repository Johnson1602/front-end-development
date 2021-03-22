/**
 * 测试使用 js 属性和 setAttribute 方法为 DOM 元素添加属性
 */

const divs = document.querySelectorAll('div');
const div1 = divs[0];
const div2 = divs[1];

console.log(typeof div1);   // object

// 通过 . 的形式设置 css 属性
div1.style.fontSize = '25px';
console.log(div1.style.fontSize);   // 25px
console.log(div1.getAttribute('style'));    // font-size: 25px;

// 通过 . 的形式设置自定义属性
div1.style.dataIndex = '1';
console.log(div1.style.dataIndex);  // 1
console.log(div1.getAttribute('dataIndex'));    // null

// 通过 setAttribute() 的形式设置 css 属性
div2.setAttribute('style', 'font-size: 30px;');
console.log(div2.style.fontSize);   // 30px
console.log(div2.getAttribute('style'));    // font-size: 30px;

// 通过 setAttribute() 的形式设置自定义属性
div2.setAttribute('data-index', 2);
// console.log(div2.dataindex);    // 不好这样获取自定义属性
console.log(div2.getAttribute('data-index'));   // 2

console.log(div2.getAttributeNames());  // (2) ["style", "data-index"]
