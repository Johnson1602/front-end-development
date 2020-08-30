function animate(obj, targetPosition, callback) {
	// 一上来就先清楚原先的定时器，防止多次添加定时器让动画速度变快
	clearInterval(obj.timer);

	// 直接给对象添加 timer 属性
	// 一是节约内存空间，不用每次都声明一个新的变量 var timer
	// 二是这样能更好的区分每个元素的 timer，而不是所有的元素的定时器都叫 timer
	obj.timer = setInterval(function () {
		// 把原先的固定步长改为变化步长来实现 ease out 效果
		// step 计算公式：(目标位置 - 当前位置) / 10
		var offsetLeft = obj.offsetLeft;
		var step = (targetPosition - offsetLeft) / 10;
		// 通过取整来防止数值过小无法移动导致函数无限运行
		step = step > 0 ? Math.ceil(step) : Math.floor(step);
		if (offsetLeft == targetPosition) {
			clearInterval(obj.timer);
			if (callback) {
				callback();
			}
		} else {
			obj.style.left = offsetLeft + step + 'px';
		}
	}, 15)
}