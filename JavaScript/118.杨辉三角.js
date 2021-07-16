/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
/* 
不知道该怎么说，就是完全凭直觉写的然后通过了，感觉自己写的很cult。
*/
/* 
Accepted
14/14 cases passed (64 ms)
Your runtime beats 97.86 % of javascript submissions
Your memory usage beats 10.64 % of javascript submissions (38 MB)
*/
var generate = function (numRows) {
  const res = []
  for (let i = 0; i < numRows; i++) {
    res[i] = []
    if (i > 1) {
      const arr = res[i - 1]
      let p = 0
      for (let j = 1; j < i; j++) {
        if (arr[p + 1]) {
          res[i][j] = arr[p] + arr[p + 1]
          p++
        }
      }
    }
    res[i][i] = 1
    res[i][0] = 1
  }
  return res
};
// @lc code=end

