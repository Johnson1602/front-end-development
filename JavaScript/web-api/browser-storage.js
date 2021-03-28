const date = new Date(9999, 0, 1).toUTCString();
const pastDate = new Date(1999, 9, 1).toUTCString();
// 设置 cookie
document.cookie = `name=Weiyi; expires=${date}`;
// 追加一个 cookie
document.cookie = `age=24; expires=${date}`;
// 删除一个 cookie
document.cookie = `name=; expires=${pastDate}`;
