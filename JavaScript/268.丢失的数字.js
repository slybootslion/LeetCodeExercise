/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* 
排序，遍历，然后看哪个没有，就是这么优秀
*/
/* 
Accepted
122/122 cases passed (88 ms)
Your runtime beats 71.01 % of javascript submissions
Your memory usage beats 95.19 % of javascript submissions (39.9 MB)
*/
var missingNumber = function(nums) {
  const sArr = nums.sort((a, b) => a - b)
  let i = 0
  for (; i < sArr.length ; i++) {
    const num = sArr[i]
    if (num > i) return i
  }
  return i
};

// @lc code=end

