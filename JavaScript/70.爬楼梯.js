/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* 
动态规划，山寨版斐波那契数列
*/
/* 
Accepted
45/45 cases passed (80 ms)
Your runtime beats 57.2 % of javascript submissions
Your memory usage beats 86.51 % of javascript submissions (37.5 MB)
*/
var climbStairs = function (n) {
  if (n < 2) return n
  let count = 1
  let q = 1
  for (let i = 1; i < n; i++) {
    const temp = count
    count = count + q
    q = temp
  }
  return count
};
// @lc code=end

