/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/* 
数组遍历和操作，没啥好说的，很简单
*/
/* 
Accepted
113/113 cases passed (88 ms)
Your runtime beats 48.74 % of javascript submissions
Your memory usage beats 99.36 % of javascript submissions (37.2 MB)
*/
var removeElement = function (nums, val) {
  if (!nums.length) return []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === val) {
      nums.splice(i, 1)
      i--
    }
  }
  return nums.length
};
// @lc code=end

