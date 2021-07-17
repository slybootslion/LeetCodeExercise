/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
/* 
来自官方的解答：
https://leetcode-cn.com/problems/valid-sudoku/solution/you-xiao-de-shu-du-by-leetcode/
*/
/* 
Accepted
507/507 cases passed (84 ms)
Your runtime beats 97.79 % of javascript submissions
Your memory usage beats 71.52 % of javascript submissions (41 MB)
*/
var isValidSudoku = function (board) {
  const rows = new Map()
  const columns = new Map()
  const boxes = new Map()

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j]
      if (num !== '.') {
        const boxIndex = parseInt(i / 3) * 3 + parseInt(j / 3)
        if (rows.has(`${i}${num}`) || columns.has(`${j}${num}`) || boxes.has(`${boxIndex}${num}`)) return false
        else {
          rows.set(`${i}${num}`, i)
          columns.set(`${j}${num}`, j)
          boxes.set(`${boxIndex}${num}`, boxIndex)
        }
      }
    }
  }
  return true
};
// @lc code=end

