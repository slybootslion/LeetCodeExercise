/*
 * @lc app=leetcode.cn id=1081 lang=javascript
 *
 * [1081] 不同字符的最小子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
/* 
Accepted
67/67 cases passed (84 ms)
Your runtime beats 94.19 % of javascript submissions
Your memory usage beats 93.02 % of javascript submissions (38.2 MB)
*/
var smallestSubsequence = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    let str = s[i]
    if (map.has(str)) map.set(str, map.get(str) + 1)
    else map.set(str, 1)
  }

  let stack = []
  for (let i = 0; i < s.length; i++) {
    const str = s[i]
    map.set(str, map.get(str) - 1)
    if (!stack.includes(str)) {
      let len = stack.length
      while (len-- && stack[len] > str && map.get(stack[len])) stack.pop()
      stack.push(str)
    }
  }
  return stack.join('')
};
// @lc code=end

