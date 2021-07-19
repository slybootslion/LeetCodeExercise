/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/* 
你以为这是个数学题？其实是个逻辑推理题。
*/
/* 
Accepted
21/21 cases passed (80 ms)
Your runtime beats 73.71 % of javascript submissions
Your memory usage beats 41.82 % of javascript submissions (38.1 MB)
*/
var rotate = function (matrix) {
  const len = matrix.length
  for (let i = 0; i < parseInt(len / 2); i++)
    for (let j = i; j < len - i - 1; j++) {
      const temp = matrix[i][j]
      const m = len - j - 1
      const n = len - i - 1
      matrix[i][j] = matrix[m][i]
      matrix[m][i] = matrix[n][m]
      matrix[n][m] = matrix[j][n]
      matrix[j][n] = temp
    }
};
// @lc code=end

