/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
思路：变异双指针，记录累加，如果累计不大于当前值，就让第二个指针挪到当前位置，并保留下最大值记录。以此类推，直到数据遍历完毕，返回最大值。
*/
/* 
Accepted
203/203 cases passed (84 ms)
Your runtime beats 84.01 % of javascript submissions
Your memory usage beats 69.73 % of javascript submissions (39.2 MB)
*/
const maxSubArray = nums => {
  if (nums.length === 1) return nums[0]
  let sum = 0
  let max = nums[0]
  for (let i = 0; i < nums.length ; i++) {
    const s = sum + nums[i]
    sum = s > nums[i] ? s : nums[i]
    max = Math.max(sum, max)
  }
  return max
}
// @lc code=end

