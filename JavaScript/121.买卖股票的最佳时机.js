/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/* 
贪心算法
*/
/* 
Accepted
211/211 cases passed (84 ms)
Your runtime beats 99.28 % of javascript submissions
Your memory usage beats 98.36 % of javascript submissions (47.2 MB)
*/
/* 
var maxProfit = function(prices) {
  let minItem = prices[0]
  let max = 0

  prices.forEach(price => {
    if (price < minItem) minItem = price
    if (price - minItem > max) max = price - minItem 
  })

  return max
}; 
*/

/* 
双遍历，这是官方提供的解题思路
but，用他们自己的题解，提交的时候会不通过，显示超时
不过，这确实是一个方法，只是效率低
*/
/* 
Time Limit Exceeded
*/
const maxProfit = prices => {
  let max = 0
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const diff = prices[j] - prices[i]
      if (diff > max) max = diff
    }
  }
  return max
}
// @lc code=end

