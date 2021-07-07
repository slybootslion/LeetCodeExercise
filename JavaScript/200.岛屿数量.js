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
var numIslands = function(grid) {
  const len = grid.length
  if (!len) return
  let count = 0
  let queue = []
  const dists = [[0,1], [1,0], [0, -1], [-1, 0]]
  const c = grid[0].length
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < c; j++) {
      if(grid[i][j] === '1') {
        count++
        queue.push([i, j])
        grid[i][j] = '0'
        while(queue.length){
          const cur = queue.shift()
          dists.forEach(dist => {
            const x = cur[0] + dist[0]
            const y = cur[1] + dist[1]
            if (grid[x] && grid[x][y] === '1') {
               grid[x][y] = '0'
               queue.push([x, y])
            }
          })
        }
      }
    }
  }
  return count
};
// @lc code=end

