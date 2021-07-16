/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
没什么技巧可言，就是一通遍历加操作
*/
/* 
Accepted
362/362 cases passed (1144 ms)
Your runtime beats 5.01 % of javascript submissions
Your memory usage beats 8.33 % of javascript submissions (41.1 MB)
*/
const removeDuplicates = nums => {
  if (nums.length < 1) return nums.length
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === nums[i + 1]) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
}
// @lc code=end
