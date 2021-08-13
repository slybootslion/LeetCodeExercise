/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/* 
官方题解
https://leetcode-cn.com/problems/merge-intervals/solution/he-bing-qu-jian-by-leetcode-solution/
*/
/* 
Accepted
168/168 cases passed (80 ms)
Your runtime beats 88.41 % of javascript submissions
Your memory usage beats 60.58 % of javascript submissions (39.6 MB)
*/
var merge = function (intervals) {
  intervals.sort((x, y) => x[0] - y[0])
  const res = []
  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i]
    const len = res.length
    if (!res.length || res[len - 1][1] < interval[0]) res.push(interval)
    else res[len - 1][1] = Math.max(res[len - 1][1], interval[1])
  }
  return res
};
// @lc code=end

