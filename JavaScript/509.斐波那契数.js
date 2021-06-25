/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* 
思路： 动规
*/
/* 
Accepted
31/31 cases passed (92 ms)
Your runtime beats 47.5 % of javascript submissions
Your memory usage beats 46.55 % of javascript submissions (37.6 MB)
*/
var fib = function (n) {
  if (n < 2) return n
  let count = 1
  let q = 0
  for (let i = 2; i <= n; i++) {
    let temp = count
    count = count + q
    q = temp
  }
  return count
};
// @lc code=end

