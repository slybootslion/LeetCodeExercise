/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  const res = []
  for (let i = 0; i < rowIndex; i++) {
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

