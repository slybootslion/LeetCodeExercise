/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/* 
方法一：调用api的方式，JavaScript的无耻解法
*/
/* 
var hammingWeight = function (n) {
  return n.toString(2).replace(/0/g, '').length
};
*/

/* 
方法二：位运算，官方答案，其实根本看不懂
*/
/* 
Accepted
601/601 cases passed (88 ms)
Your runtime beats 62.8 % of javascript submissions
Your memory usage beats 40.81 % of javascript submissions (39.2 MB)
*/
const hammingWeight = n => {
  let count = 0
  for (let i = 0; i < 32; i++) {
    if ((n & (1 << i))) count++
  }
  return count
}

// @lc code=end

