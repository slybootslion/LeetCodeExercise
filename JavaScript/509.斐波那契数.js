/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/* 
思路： 动规
*/
// 暴力递归版 简单易写效率低
/* 
const fib = n => {
  if (n < 2) return n
  return fib(n - 1) + fib(n - 2)
}
*/
// 带缓存递归版
/* 
const fib = n => {
  if (n < 2) return n
  const arr = new Array(n + 1).fill(0)
  const tool = n => {
    if (n <= 2)  return 1
    if (arr[n]) return arr[n]
    arr[n] = tool(n - 1) + tool(n - 2)
    return arr[n]
  }
  return tool(n)
}
*/

/* 
Accepted
31/31 cases passed (92 ms)
Your runtime beats 47.5 % of javascript submissions
Your memory usage beats 46.55 % of javascript submissions (37.6 MB)
*/
// 迭代版 动态规划解法
/* 
const fib = n => {
  if (n < 2) return n
  const arr = new Array(n + 1).fill(0)
  arr[1] = arr[2] = 1
  for (let i = 3; i <= n; i++) 
    arr[i] = arr[i - 1] + arr[i - 2]
  return arr[n]
} 
*/

// 迭代版变种 减少创建一个数组，只用一个临时变量控制，空间复杂度是O(1)
var fib = function (n) {
  if (n < 2) return n
  let count = 1
  let q = 0
  for (let i = 2; i <= n; i++) {
    let temp = count
    count = count + q
    q = temp
  }
  return count
};
// @lc code=end

