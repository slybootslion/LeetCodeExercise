/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
线性遍历，额外空间，就这样吧。
*/
/* 
Accepted
47/47 cases passed (96 ms)
Your runtime beats 32.36 % of javascript submissions
Your memory usage beats 53.59 % of javascript submissions (41.1 MB)
*/
var majorityElement = function (nums) {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (map.has(num)) map.set(num, map.get(num) + 1)
    else map.set(num, 1)
  }
  const arr = Array.from(map)
  let max = arr[0]
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i]
    if (item[1] > max[1]) max = item
  }
  return max[0]
};
// @lc code=end

