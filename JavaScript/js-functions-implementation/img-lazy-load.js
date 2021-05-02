// 获取所有的图片标签
const imgs = document.getElementsByTagName("img");
// 获取可视区域的高度，两种方式提高兼容性
const viewHeight = window.innerHeight || document.documentElement.clientHeight;
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let count = 0;

function lazyLoad() {
    console.log("Scrolling...");
    for (let i = count; i < imgs.length; i++) {
        // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        const distance = viewHeight - imgs[i].getBoundingClientRect().top;
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if (distance >= 0) {
        // 给元素写入真实的src，展示图片
        imgs[i].src = imgs[i].getAttribute("data-src");
        // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
        count++;
        }
    }
}

// 防抖函数
function debounce(fn, delay = 500) {
    let timer = null;
    return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, args);
        }, delay);
    };
}

// 页面初始化时加载首屏图片
window.onload = lazyLoad;
// 监听 Scroll 事件，为了防止频繁调用，使用防抖函数优化一下
window.addEventListener("scroll", debounce(lazyLoad, 600), false);
