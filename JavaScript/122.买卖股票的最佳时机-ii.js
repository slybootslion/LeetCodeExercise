/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/* 
贪心算法
题目说，当天如果卖出，是不能买入的，但是这样的计算，不管那么多，就是第二天比前一天多，那就直接加上差值
最终的答案也是对的
因为，这并不是真的股票买卖，最终结果是在一开始题目就给定好的。
*/
/* 
Accepted
200/200 cases passed (68 ms)
Your runtime beats 98.89 % of javascript submissions
Your memory usage beats 97 % of javascript submissions (39 MB)
*/
/* 
const maxProfit = prices => {
  let max = 0
  for (let i = 1; i < prices.length ; i++) {
    if (prices[i] > prices[i - 1]) max += prices[i] - prices[i - 1]
  }
  return max
} 
*/

// 贪心算法 骚包写法
/* 
const maxProfit = prices => {
  let max = 0
  for (let i = 1; i < prices.length ; i++) {
    max += Math.max(0, prices[i] - prices[i - 1])
  }
  return max
}
*/

/* 
求最值，动态规划 官方题解
*/
/* 
Accepted
200/200 cases passed (76 ms)
Your runtime beats 94.36 % of javascript submissions
Your memory usage beats 8.87 % of javascript submissions (40.3 MB)
*/
/* 
const maxProfit = prices => {
  const len = prices.length
  const dp = new Array(len).fill('').map(() => new Array(2).fill(0))
  dp[0][0] = 0, dp[0][1] = -prices[0]
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i])
  }
  return dp[len - 1][0]
} 
*/

/* 
动态规划改进版 官方题解
*/
/* 
Accepted
200/200 cases passed (76 ms)
Your runtime beats 94.36 % of javascript submissions
Your memory usage beats 80.33 % of javascript submissions (39.2 MB)
*/
const maxProfit = prices => {
  const len = prices.length
  let dp0 = 0, dp1 = -prices[0]
  for (let i = 1; i < len; i++) {
    let temp1 = Math.max(dp0, dp1 + prices[i])
    let temp2 = Math.max(dp1, dp0 - prices[i])
    dp0 = temp1
    dp1 = temp2
  }
  return dp0
}
// @lc code=end

