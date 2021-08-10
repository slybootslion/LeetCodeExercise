/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
/* 
官方题解：
找出数字 n 是否是数字 b 的幂的一个简单方法是，n%3 只要余数为 0，就一直将 n 除以 b。
n = b的x次方 = b×b×…×b
因此，应该可以将n除以b的x次，每次都有0的余数，最终结果是1。
*/
/* 
Accepted
21038/21038 cases passed (212 ms)
Your runtime beats 83.54 % of javascript submissions
Your memory usage beats 11.5 % of javascript submissions (47.8 MB)
*/
var isPowerOfThree = function (n) {
  if (n < 1) return false
  while(n % 3 === 0) n /= 3
  return n === 1
};
// @lc code=end

