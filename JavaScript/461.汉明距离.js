/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/* 
方法一：内置api
*/
/* 
Accepted
149/149 cases passed (72 ms)
Your runtime beats 93.84 % of javascript submissions
Your memory usage beats 33.39 % of javascript submissions (38 MB)
*/
/* 
var hammingDistance = function(x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length
};
*/

// 方法二：官方方法，位计算，啥意思，谁能看懂？
/* 
Accepted
149/149 cases passed (76 ms)
Your runtime beats 88.78 % of javascript submissions
Your memory usage beats 46.94 % of javascript submissions (37.9 MB)
*/
const hammingDistance = (x, y) => {
  let s = x ^ y, count = 0
  while(s != 0) {
    count += s & 1
    s >>= 1
  }
  return count
}
// @lc code=end

