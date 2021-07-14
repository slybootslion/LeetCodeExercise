/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 
方法一：使用map来配对
*/
/* 
var twoSum = function (nums, target) {
  const map = new Map()
  for (let i = 0; i < nums.length ; i++) {
    const num = nums[i]
    if (map.has(num)) return [map.get(num), i]
    else map.set(target - num, i)
  }
}; 
*/

/* 
方法二：利用数组api，直接查找，不过成绩不行。
*/
/* 
Accepted
54/54 cases passed (936 ms)
Your runtime beats 5.03 % of javascript submissions
Your memory usage beats 5 % of javascript submissions (43.5 MB)
*/
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length ; i++) {
    const num = nums[i]
    const idx = new Array(i + 1).concat(nums.slice(i + 1)).findIndex(number => target - num === number)
    if (idx > -1) return [i, idx]
  }
}
// @lc code=end

