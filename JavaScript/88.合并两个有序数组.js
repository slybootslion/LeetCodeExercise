/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* 
方法一：
old school style：双指针
*/
/* 
Accepted
59/59 cases passed (56 ms)
Your runtime beats 99.92 % of javascript submissions
Your memory usage beats 47.72 % of javascript submissions (38 MB)
*/
/* 
var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] <= nums2[j]) {
      nums1[k] = nums2[j]
      j--
      k--
    } else if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
      k--
    }
  }
  while (j >= 0) {
    nums1[k] = nums2[j]
    j--
    k--
  }
};
*/

/* 
方法二：JavaScript api偷懒解法
*/
/* 
Accepted
59/59 cases passed (68 ms)
Your runtime beats 98.19 % of javascript submissions
Your memory usage beats 58.91 % of javascript submissions (37.9 MB)
*/
const merge = (nums1, m, nums2, n) => {
  let k = nums1.length - 1
  nums2.forEach(num2 => {
    nums1[k] = num2
    k--
  })
  nums1.sort((a, b) => a - b)
}
// @lc code=end
