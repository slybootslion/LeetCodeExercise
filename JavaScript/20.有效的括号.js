/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/* 
思路：栈的使用
*/
/* 
Accepted
91/91 cases passed (76 ms)
Your runtime beats 92.01 % of javascript submissions
Your memory usage beats 83.9 % of javascript submissions (37.9 MB)
*/
const dict = {
  ')': '(',
  ']': '[',
  '}': '{'
}
var isValid = function (s) {
  const arr = s.split('')
  if (arr.length % 2 !== 0) return false
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (!!dict[item]) {
      const top = stack.pop()
      if (dict[item] !== top) return false
    } else {
      stack.push(item)
    }
  }
  return !stack.length
};
// @lc code=end

