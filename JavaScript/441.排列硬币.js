/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* 
便利一把过
Accepted
1335/1335 cases passed (112 ms)
Your runtime beats 24.14 % of javascript submissions
Your memory usage beats 92.07 % of javascript submissions (39 MB)
*/
var arrangeCoins = function (n) {
  let count = 0, k = n
  for (let i = 0; i < n; i++) {
    k = k - (i + 1)
    count++
    if (k == 0) return count
    else if (k < 0) return count - 1
  }
};
// @lc code=end

