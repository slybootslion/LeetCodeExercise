/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 无耻调用api大法
/* 
Accepted
600/600 cases passed (60 ms)
Your runtime beats 100 % of javascript submissions
Your memory usage beats 70.12 % of javascript submissions (39.4 MB)
*/
var reverseBits = function (n) {
  const arr = n.toString(2).split('')
  while (arr.length < 32) arr.unshift('0')
  return parseInt(arr.reverse().join(''), 2)
};
// @lc code=end

