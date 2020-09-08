window.addEventListener('load', function () {
	// console.log('Load!');
	// 鼠标经过导航栏 全部商品分类 时显示全部分类
	var dropdown = document.querySelector('.dropdown');
	var dropdownContent = document.querySelector('.dropdown').querySelector('.dd');

	dropdown.addEventListener('mouseover', function () {
		dropdownContent.style.display = 'block';
	})
	dropdown.addEventListener('mouseout', function () {
		dropdownContent.style.display = 'none';
	})

	// 鼠标经过（离开）商品图片时，显示（隐藏）遮罩层和大图
	var previewImg = document.querySelector('.preview-img');
	// console.log(previewImg);
	var mask = previewImg.querySelector('.mask');
	var bigImgWrapper = previewImg.querySelector('.big');
	var bigImg = bigImgWrapper.querySelector('img');

	previewImg.addEventListener('mouseover', function () {
		mask.style.display = 'block';
		bigImgWrapper.style.display = 'block';
	})

	previewImg.addEventListener('mouseout', function () {
		mask.style.display = 'none';
		bigImgWrapper.style.display = 'none';
	})

	// 遮罩层跟随鼠标，并且鼠标位于遮罩层中央
	previewImg.addEventListener('mousemove', function (e) {
		// 计算鼠标在预览图中的位置：鼠标相对于页面的位置 - 盒子相对于页面的位置
		var offsetX = e.pageX - this.offsetLeft;
		var offsetY = e.pageY - this.offsetTop;
		// console.log(offsetX + ', ' + offsetY);

		// 限定遮罩层只能在预览框中移动
		// 计算遮罩层在预览图中的位置(遮挡层移动距离)
		var maskX = offsetX - mask.offsetWidth / 2;
		var maskY = offsetY - mask.offsetHeight / 2;
		// 计算遮罩层最大移动距离
		var maskMax = this.clientWidth - mask.offsetWidth;
		if (maskX <= 0) {
			maskX = 0;
		} else if (maskX >= maskMax) {
			maskX = maskMax;
		}
		if (maskY <= 0) {
			maskY = 0;
		} else if (maskY >= maskMax) {
			maskY = maskMax;
		}
		mask.style.left = maskX + 'px';
		mask.style.top = maskY + 'px';

		// 使大图片同步移动，计算公式：大图片移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层最大移动距离
		var bigMax = bigImg.offsetWidth - bigImgWrapper.offsetWidth;
		var bigX = maskX * bigMax / maskMax;
		var bigY = maskY * bigMax / maskMax;

		bigImg.style.left = -bigX + 'px';
		bigImg.style.top = -bigY + 'px';
	})
})