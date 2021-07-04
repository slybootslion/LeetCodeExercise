/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/* 
思路：偷懒的解法，全程调用JavaScript内置API
*/
/* 
Accepted
480/480 cases passed (92 ms)
Your runtime beats 90.4 % of javascript submissions
Your memory usage beats 40.68 % of javascript submissions (41.9 MB)
*/
var isPalindrome = function(s) {
  if (!s) return true
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const rStr = str.split('').reverse().join('')
  return str === rStr
};
// @lc code=end

