var isPalindrome = function(s) {
    if (!s) return true;
    let str = s.toLowerCase();
    // [0, left) & (right, str.length-1] 为回文串
    let left = 0,
        right = str.length - 1;
    while (left <= right) {
        while (left < str.length && !test(str[left])) left++;
        while (right >= 0 && !test(str[right])) right--;
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;

    // 如果是字母和数字字符，返回 true，否则返回 false
    function test(char) {
        if (
            ('a' <= char && char <= 'z') ||
            ('0' <= char && char <= '9')
        ) {
            return true;
        } else {
            return false;
        }
    }
};

const result = isPalindrome(" ");
console.log(result);