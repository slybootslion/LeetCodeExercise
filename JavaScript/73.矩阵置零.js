/*
 * @lc app=leetcode.cn id=73 lang=javascript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/* 
思路：就是很只觉得写的方法，遍历一遍记录下来有0的情况，再遍历一遍更改值，遍历了两遍，所以肯定不是最优解
*/
/* 
Accepted
164/164 cases passed (96 ms)
Your runtime beats 89.82 % of javascript submissions
Your memory usage beats 98.65 % of javascript submissions (39.4 MB) 
*/
var setZeroes = function(matrix) {
  const rows = []
  const columns = []

  for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix[0].length ; j++) {
      const num = matrix[i][j]
      if (num === 0) {
        rows.push(i)
        columns.push(j)
      }
    }
  }

  for (let i = 0; i < matrix.length ; i++) {
    for (let j = 0; j < matrix[0].length ; j++) {
      if (rows.indexOf(i) > -1 || columns.indexOf(j) > -1) matrix[i][j] = 0
    }
  }
};


// @lc code=end

