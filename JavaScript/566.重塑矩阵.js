/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
/* 
思路：
先数组拍平方便后面的操作
然后双遍历，根据规则重组矩阵
之后判断一下，是不是满足完全匹配
*/
/* 
Accepted
57/57 cases passed (96 ms)
Your runtime beats 79.93 % of javascript submissions
Your memory usage beats 18.61 % of javascript submissions (42.5 MB)
*/
var matrixReshape = function (mat, r, c) {
  const originArr = mat.flat(Infinity)
  let count = 0
  let res = []
  for (let i = 0; i < r; i++) {
    res[i] = []
    for (let j = 0; j < c; j++) {
      res[i].push(originArr[count])
      count++
    }
  }
  if (count === originArr.length && res[r - 1].length === c) return res
  return mat
};
// @lc code=end

