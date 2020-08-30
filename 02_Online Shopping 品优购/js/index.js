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
		// 5.2 鼠标经过时就停止自动播放
		clearInterval(autoPlay);
		autoPlay = null;
	})

	focusArea.addEventListener('mouseleave', function () {
		prevArrow.style.display = 'none';
		nextArrow.style.display = 'none';
		// 5.3 鼠标离开时再打开自动播放
		autoPlay = setInterval(function () {
			nextArrow.click();
		}, 5000)
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
			// 这里点击时一定要同时更新两个计数器，不然会出问题
			currentIndicatorIndex = this.getAttribute('index');
			currentImageIndex = this.getAttribute('index');
			// console.log('image: ' + currentImageIndex);
			// console.log('indicator: ' + currentIndicatorIndex);

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
	// console.log('image: ' + currentImageIndex);
	var currentIndicatorIndex = 0;
	// console.log('indicator: ' + currentIndicatorIndex);
	// 添加节流阀，防止用户点击过快
	var flag = true;

	// 调整指示灯的样式
	function updateIndicator() {
		for (var i = 0; i < indicator.children.length; i++) {
			indicator.children[i].className = '';
		}
		indicator.children[currentIndicatorIndex].className = 'selected';
	}

	nextArrow.addEventListener('click', function () {
		if (flag) {
			flag = false;
			if (currentImageIndex == images.children.length - 1) {
				images.style.left = 0;
				currentImageIndex = 0;
			}
			currentImageIndex++;
			// 利用回调函数，当动画执行完毕后才允许再次点击按钮
			animate(images, -imageWidth * currentImageIndex, function () {
				flag = true;
			});
	
			// 4.3 让指示灯跟随图片一起切换
			currentIndicatorIndex++;
			if (currentIndicatorIndex == indicator.children.length) {
				currentIndicatorIndex = 0;
			}
			updateIndicator();
	
			// console.log('image: ' + currentImageIndex);
			// console.log('indicator: ' + currentIndicatorIndex);
		}
	})

	prevArrow.addEventListener('click', function () {
		if (flag) {
			flag = false;
			if (currentImageIndex == 0) {
				currentImageIndex = images.children.length - 1;
				images.style.left = -currentImageIndex * imageWidth + 'px';
				
			}
			currentImageIndex--;
			animate(images, -imageWidth * currentImageIndex, function () {
				flag = true;
			});
	
			// 4.3 让指示灯跟随图片一起切换
			currentIndicatorIndex--;
			if (currentIndicatorIndex == -1) {
				currentIndicatorIndex = 3;
			}
			updateIndicator();
	
			// console.log('image: ' + currentImageIndex);
			// console.log('indicator: ' + currentIndicatorIndex);
		}
	})

	// 5. 设置轮播图自动播放
	var autoPlay = setInterval(function () {
		// 模拟鼠标点击 next 按钮
		nextArrow.click();
	}, 5000)
})