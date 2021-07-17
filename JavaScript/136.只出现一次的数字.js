/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
方法一：api的使用
*/
/* 
Accepted
61/61 cases passed (1380 ms)
Your runtime beats 5.08 % of javascript submissions
Your memory usage beats 15.23 % of javascript submissions (42.8 MB) 
*/
/* 
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0] 
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    nums.splice(i, 1)
    if (nums.indexOf(num) > -1) nums.splice(i, 0, num)
    else return num
  }
};
*/

/* 
方法二： 额外空间做记录
*/
/* 
const singleNumber = nums => {
  if (nums.length === 1) return nums[0]
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (set.has(num)) set.delete(num)
    else set.add(num)
  }
  return Array.from(set)[0]
}
*/

/* 
方法三：不使用额外空间且O(n)时间复杂度的方法是位运算
*/
/* 
Accepted
61/61 cases passed (76 ms)
Your runtime beats 96.29 % of javascript submissions
Your memory usage beats 20.95 % of javascript submissions (42.2 MB)
*/
const singleNumber = nums => {
  let single = 0
  nums.forEach(num => single ^= num);
  return single
}

// @lc code=end

