window.addEventListener('load', function () {
	// 手机号
	var fieldTel = document.querySelector('#tel');
	var regTel = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
	check(fieldTel, regTel);

	// 短信验证码
	var fieldOTP = document.querySelector('#otp');
	var regOTP = /^\d{6}$/;
	check(fieldOTP, regOTP);

	// 密码
	var fieldPassword = document.querySelector('#pass');
	// var regPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
	var regPassword = /^[a-zA-Z0-9!@#$%^&*-]{6,16}$/;
	check(fieldPassword, regPassword);

	// 实时检测密码强度
	var weakPass = document.querySelector('.weak');
	var middlePass = document.querySelector('.middle');
	var strongPass = document.querySelector('.strong');
	fieldPassword.addEventListener('keyup', function () {
		// console.log('keyup');
		var passLength = this.value.length;
		// 强密码正则
		var regPasswordStrong = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;
		if (passLength == 0) {
			weakPass.style.backgroundColor = '#cccccc';
		} else if (passLength <= 8) {
			weakPass.style.backgroundColor = '#de1111';
			middlePass.style.backgroundColor = '#cccccc';
		} else if (passLength <= 12) {
			middlePass.style.backgroundColor = '#f79100';
			strongPass.style.backgroundColor = '#cccccc';
		} else if (regPasswordStrong.test(this.value)) {
			strongPass.style.backgroundColor = '#40b83f';
		} else {
			strongPass.style.backgroundColor = '#cccccc';
		}
	})

	// 确认密码
	var fieldComfirm = document.querySelector('#pass-confirm');
	fieldComfirm.addEventListener('blur', function () {
		var inputValue = this.value;
		var pass = fieldPassword.value;
		var message = '';
		if (inputValue == '') {
			this.nextElementSibling.className = 'error';
			message = '请重新输入密码';
			this.nextElementSibling.innerHTML = '<i class="error-icon"></i>' + message;
		} else if (pass == inputValue) {
			this.nextElementSibling.className = 'success';
			this.nextElementSibling.innerHTML = '<i class="success-icon"></i>';
		} else {
			this.nextElementSibling.className = 'error';
			message = '两次输入的密码不一致，请修改';
			this.nextElementSibling.innerHTML = '<i class="error-icon"></i>' + message;
		}
	})

	// 检查表单内容合法性
	// 参数列表：要检查的表单，进行检查的正则表达式
	function check(inputField, regExp) {
		inputField.addEventListener('blur', function () {
			var inputValue = this.value;
			var message = '';
			var fieldType = this.id;

			if (regExp.test(inputValue)) {
				this.nextElementSibling.className = 'success';
				this.nextElementSibling.innerHTML = '<i class="success-icon"></i>';
			} else {
				this.nextElementSibling.className = 'error';
				if (fieldType == 'tel') {
					message = '请输入正确的手机号';
				} else if (fieldType == 'otp') {
					message = '请输入 6 位数字验证码';
				} else if (fieldType == 'pass') {
					message = '请输入 6-16 位密码';
				}
				this.nextElementSibling.innerHTML = '<i class="error-icon"></i>' + message;
			}
		})
	}
})