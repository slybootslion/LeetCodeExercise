/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
/* 
广度优先。
*/
/* 
Accepted
48/48 cases passed (104 ms)
Your runtime beats 36 % of javascript submissions
Your memory usage beats 28.56 % of javascript submissions (40.8 MB)
*/
var numIslands = function (grid) {
  if (!grid.length) return 0
  let queue = []
  let count = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++
        grid[i][j] = 0
        queue.push([i, j]) // 推入要遍历的队列
        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]
        // 循环，直到队列清空
        while (queue.length) { 
          const current = queue.shift()
          for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i]
            const x = current[0] + dir[0]
            const y = current[1] + dir[1]
            if (x < 0 || x >= grid.length || y < 0 || y > grid[0].length || grid[x][y] !== '1') {
              continue
            }
            grid[x][y] = '0'
            queue.push([x, y])
          }
        }
      }
    }
  }
  return count
};
// @lc code=end

