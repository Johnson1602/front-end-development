window.addEventListener('load', function () {
	// 1. 当鼠标进入（离开）轮播图区域时，显示（隐藏）左右箭头
	// 轮播图的左右箭头
	var prevArrow = document.querySelector('.prev');
	var nextArrow = document.querySelector('.next');
	// 轮播图区域
	var focusArea = document.querySelector('.focus');
	var imageWidth = focusArea.offsetWidth;

	focusArea.addEventListener('mouseenter', function () {
		prevArrow.style.display = 'block';
		nextArrow.style.display = 'block';
	})

	focusArea.addEventListener('mouseleave', function () {
		prevArrow.style.display = 'none';
		nextArrow.style.display = 'none';
	})

	// 2. 动态创建轮播图指示灯
	// 获取指示灯的 ul
	var indicator = focusArea.querySelector('.nav-indicator').querySelector('ul');
	// 获取轮播图的 ul
	var images = focusArea.querySelector('ul');

	// 循环次数通过焦点图个数来决定，创建相应个数的 li
	for (var i = 0; i < images.children.length; i++) {
		var li = document.createElement('li');
		// 创建 li 的同时添加自定义属性 index 方便后面和轮播图的动画联动
		li.setAttribute('index', i);
		indicator.appendChild(li);

		// 3. 创建指示灯的同时绑定点击事件
		// 3.1 当点击时，使被点击的指示灯变白 selected
		li.addEventListener('click', function () {
			for (var i = 0; i < indicator.children.length; i++) {
				indicator.children[i].className = '';
			}
			this.className = 'selected';

			// 3.2 同时根据被点击的 li 来显示对应的焦点图（动画）
			// 移动距离计算公式：-单张图片大小 * 指示灯 index
			animate(images, -imageWidth * this.getAttribute('index'));
		})
	}

	// 默认使第一个指示灯显示为被选中
	indicator.children[0].className = 'selected';

	// 定位指示灯到轮播图底部居中
	indicator.parentNode.style.marginLeft = -indicator.parentNode.offsetWidth / 2 + 'px';

	// 4. 点击左右按钮的时候切换轮播图（无缝切换）
	// 4.1 为了实现无缝切换，需要克隆第一张图片放到最后，在这里进行克隆不会影响到前面生成的指示灯，非常优秀，克隆参数为 true 代表深克隆，将会克隆这个元素以及其中的子节点
	var cloneFirst = images.children[0].cloneNode(true);
	images.appendChild(cloneFirst);

	// 4.2 引入计数器，开始注册事件
	var currentImageIndex = 0;
	// console.log(currentImageIndex);
	nextArrow.addEventListener('click', function () {
		if (currentImageIndex == images.children.length - 1) {
			images.style.left = 0;
			currentImageIndex = 0;
		}
		currentImageIndex++;
		// console.log(currentImageIndex);
		animate(images, -imageWidth * currentImageIndex);
	})

	prevArrow.addEventListener('click', function () {
		if (currentImageIndex == 0) {
			images.style.left = -(images.children.length - 1) * imageWidth + 'px';
			currentImageIndex = 4;
		}
		currentImageIndex--;
		// console.log(currentImageIndex);
		animate(images, -imageWidth * currentImageIndex);
	})
})