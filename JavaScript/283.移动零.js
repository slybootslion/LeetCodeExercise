/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
方法一：调用api，遇到0截取并补位
*/
/* 
Accepted
21/21 cases passed (88 ms)
Your runtime beats 78.09 % of javascript submissions
Your memory usage beats 81.58 % of javascript submissions (39.3 MB)
*/
/* 
var moveZeroes = function(nums) {
  let count = 0
  nums.forEach(num => num === 0 && count++)
  const len = nums.length
  for (let i = 0; i < len - count; i++) {
    const num = nums[i]
    if (num === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
    }
  }
};
*/

/* 
方法二：双指针
*/
/* 
Accepted
21/21 cases passed (64 ms)
Your runtime beats 99.95 % of javascript submissions
Your memory usage beats 96.87 % of javascript submissions (39.1 MB)
*/
const moveZeroes = nums => {
  let p = 0
  for (let i = 0; i < nums.length ; i++) {
    const num = nums[i]
    if (num !== 0) {
      const temp = nums[i]
      nums[i] = nums[p]
      nums[p] = temp
      p++
    }
  }
}
// @lc code=end

