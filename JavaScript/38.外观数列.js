/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
/* 
Accepted
30/30 cases passed (68 ms)
Your runtime beats 99.27 % of javascript submissions
Your memory usage beats 30.54 % of javascript submissions (40.8 MB)
*/
var countAndSay = function (n) {
  let res = '1'
  while (--n > 0) {
    let temp = ''
    let count = 1
    for (let i = 0; i < res.length ; i++) {
      if (res[i] === res[i + 1]) count++
      else {
        temp += count + res[i]
        count = 1
      }
    }
    res = temp
  }
  return res
};
// @lc code=end

