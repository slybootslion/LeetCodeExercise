/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* 
广度优先遍历
将数一层层拆解，查看有几种完全平方数组成，返回拆解的层数
贴一个图解：
https://leetcode-cn.com/problems/perfect-squares/solution/js-yi-dong-de-bfs-by-llf-t-scdn/
*/
/* 
Accepted
588/588 cases passed (112 ms)
Your runtime beats 93.33 % of javascript submissions
Your memory usage beats 13.82 % of javascript submissions (44.5 MB)
*/
var numSquares = function (n) {
  const q = [n]
  let level = 0
  const set = new Set()
  while (q.length) {
    level++
    const len = q.length
    for (let i = 0; i < len; i++) {
      const current = q.shift()
      for (let j = 1; j * j <= current; j++) {
        const num = current - j * j
        if (num === 0) return level
        if (!set.has(num)) {
          set.add(num)
          q.push(num)
        }
      }
    }
  }
}; 
// @lc code=end

