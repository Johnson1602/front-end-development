// 异步 API 的返回值要利用 callback 函数进行返回接收并处理
function getMsg(resolve) {
	setTimeout(function () {
		// 这里不能直接 return，而要调用 callback 函数返回出去
		resolve({
			messgae: 'Async API finishes'
		});
	 }, 2000);
}

// 调用函数
// 为了方便理解，这里将 callback 函数单独声明出来，并叫做 'then'
function then(msg) {
	console.log(msg);
}

// 调用异步函数
getMsg(then);
