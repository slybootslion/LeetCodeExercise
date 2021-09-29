/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function (machines) {
  const total = machines.reduce((a, b) => a + b)
  const len = machines.length
  if (total % len !== 0) return -1
  const average = total / len
  let sum = 0, ans = 0
  for (let machine of machines) {
    machine -= average
    sum += machine
    ans = Math.max(ans, Math.max(Math.abs(sum), machine))
  }
  return ans
};
// @lc code=end

