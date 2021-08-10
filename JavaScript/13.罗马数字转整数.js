/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/* 
这是数学题吗？？？这是个字符串问题
*/
/* 
Accepted
3999/3999 cases passed (140 ms)
Your runtime beats 87.99 % of javascript submissions
Your memory usage beats 43.32 % of javascript submissions (44.3 MB)
*/
var romanToInt = function (s) {
  const dict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  let num = 0
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i] + s[i + 1]]) {
      num += dict[s[i] + s[i + 1]]
      i++
    } else {
      num += dict[s[i]]
    }
  }
  return num
};
// @lc code=end
