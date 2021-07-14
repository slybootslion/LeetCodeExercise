/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
/* 
Accepted
47/47 cases passed (256 ms)
Your runtime beats 58.15 % of javascript submissions
Your memory usage beats 6.38 % of javascript submissions (59.8 MB)
*/
var dailyTemperatures = function (temperatures) {
  // 存放的是当前温度所在temperatures中的序号
  const stack = []
  const len = temperatures.length
  const arr = new Array(len).fill(0)

  for (let i = 0; i < temperatures.length; i++) {
    const t = temperatures[i]
    // 当栈中有数，并且当前温度大于栈中最后一位温度的时候，将栈一次出栈，并记录
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack.pop()
      arr[index] = i - index
    }
    stack.push(i)
  }

  return arr
};
// @lc code=end

