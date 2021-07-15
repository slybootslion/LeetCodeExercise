/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
/* 
思路：找到短的数组，遍历短的拿到长的里相同的并记录，然后删掉长的中相同的数，以此类推，返回最终记录的值，没什么特别的难度
*/
/* 
Accepted
55/55 cases passed (76 ms)
Your runtime beats 94.95 % of javascript submissions
Your memory usage beats 97.47 % of javascript submissions (38.8 MB)
*/
var intersect = function(nums1, nums2) {
  const long = nums1.length > nums2.length ? nums1 : nums2
  const short = long === nums1 ? nums2 : nums1
  let i = 0, len = short.length
  const res = []
  for (; i < len ; i++) {
    const item = short[i]
    const index = long.indexOf(item)
    if (index > -1) {
      res.push(item)
      long.splice(index, 1)
    }
  }
  return res
};
// @lc code=end

