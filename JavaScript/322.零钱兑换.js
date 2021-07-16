/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
/* 
动态规划
*/
/* 
Accepted
188/188 cases passed (260 ms)
Your runtime beats 12.22 % of javascript submissions
Your memory usage beats 5.01 % of javascript submissions (48 MB)
*/
// 递归版
/* 
var coinChange = function (coins, amount) {
  const cache = new Map()
  const deep = n => {
    if (cache.has(n)) return cache.get(n)
    if (n === 0) return 0
    if (n < 0) return -1
    let res = Infinity
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      const r = deep(n - coin)
      if (r < 0) continue
      res = Math.min(res, r + 1)
    }
    cache.set(n, res === Infinity ? -1 : res)
    return cache.get(n)
  }
  return deep(amount)
};
*/

// 迭代版
const coinChange = (coins, amount) => {
  const arr = new Array(amount + 1).fill(amount + 1)
  arr[0] = 0
  for (let i = 0; i < arr.length ; i++) {
    for (let j = 0; j < coins.length ; j++) {
      const coin = coins[j]
      if (i - coin < 0) continue
      arr[i] = Math.min(arr[i], arr[i - coin] + 1)
    }
  }
  return (arr[amount] === amount + 1) ? -1 : arr[amount]
}

// @lc code=end

