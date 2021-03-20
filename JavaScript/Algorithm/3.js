var lengthOfLongestSubstring = function(s) {
    // 左右两个指针指定滑动窗口
    let lp = 0;
    let max = 1;
    const map = new Map();
    map.set(s[0], 0);
    // 左指针先固定不动，右指针每次向右移动一位
    for (let rp = 1; rp < s.length; rp++) {
        // 如果重复，并且重复的位置要在窗口之内，则将左指针移到之前存储的index的下一位
        if (map.has(s[rp]) && s[rp] >= lp) {
            // 更新该值的index
            lp = map.get(s[rp]) + 1;
        }
        // 添加 / 更新该值的 index
        map.set(s[rp], rp)
        // 重新计算最长子串
        max = Math.max(max, rp - lp + 1);
    }
    return s.length === 0 ? 0 : max;
};

lengthOfLongestSubstring('abcabcbb');