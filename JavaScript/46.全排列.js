/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
/* 
Accepted
26/26 cases passed (80 ms)
Your runtime beats 98.68 % of javascript submissions
Your memory usage beats 94.81 % of javascript submissions (40.2 MB)
*/
const permute = nums => {
  const res = []
  const rec = arr => {
    if (arr.length === nums.length) {
      res.push(arr)
      return
    }
    for(let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (arr.includes(num)) continue
      rec(arr.concat(num))
    }
  }
  rec([])
  return res
}
// @lc code=end

