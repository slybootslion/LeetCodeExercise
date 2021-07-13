/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
/* 
方法一：
JavaScript的偷懒写法
*/
/* 
Accepted
20/20 cases passed (72 ms)
Your runtime beats 98.89 % of javascript submissions
Your memory usage beats 32.12 % of javascript submissions (44.3 MB)
*/
/* 
var containsDuplicate = function(nums) {
  const setArr = Array.from(new Set(nums))
  return setArr.length < nums.length
}; 
*/
/* 
方法二：
不那么偷懒的方法
*/
/* 
Accepted
20/20 cases passed (88 ms)
Your runtime beats 80.78 % of javascript submissions
Your memory usage beats 67.43 % of javascript submissions (42.4 MB)
*/
const containsDuplicate = nums => {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i]
    if (set.has(item)) return true
    else set.add(item)
  }
  return false
}

// @lc code=end

