/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 挺难的
/* 
Accepted
318/318 cases passed (176 ms)
Your runtime beats 40.73 % of javascript submissions
Your memory usage beats 92.6 % of javascript submissions (47.6 MB)
*/
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  let res = []
  let len = nums.length
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1
    let r = len - 1
    if (i > 0 && nums[i] === nums[i - 1]) continue
    while (l < r) {
      if (nums[l] + nums[r] + nums[i] < 0) {
        l++
        while (l < r && nums[l] === nums[l - 1]) l++
      }
      else if (nums[l] + nums[r] + nums[i] > 0) {
        r--
        while (l < r && nums[r] === nums[r + 1]) r--
      }
      else {
        res.push([nums[l], nums[r], nums[i]])
        l++
        r--
        while (l < r && nums[l] === nums[l - 1]) l++
        while (l < r && nums[r] === nums[r + 1]) r--
      }
    }
  }
  return res
};
// @lc code=end

