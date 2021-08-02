/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 动态规划
/* 
Accepted
68/68 cases passed (68 ms)
Your runtime beats 89.86 % of javascript submissions
Your memory usage beats 29.98 % of javascript submissions (37.8 MB)
*/
var rob = function(nums) {
  let max = nums[0]
  let sum = 0
  for (let i = 1; i < nums.length ; i++) {
    const temp = Math.max(nums[i] + sum, max)
    sum = max
    max = temp
  }
  return max
};
// @lc code=end

