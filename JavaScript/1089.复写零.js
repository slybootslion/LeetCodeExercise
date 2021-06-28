/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
/* 
没啥好讲的，就是操作数组。
*/
/* 
Accepted
30/30 cases passed (96 ms)
Your runtime beats 70.25 % of javascript submissions
Your memory usage bea
ts 86.08 % of javascript submissions (39.2 MB)
*/
var duplicateZeros = function (arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const num = arr[i]
    if (num === 0) {
      arr.splice(i, 0, 0)
      i++
    }
  }
  arr.length = len
};
// @lc code=end

