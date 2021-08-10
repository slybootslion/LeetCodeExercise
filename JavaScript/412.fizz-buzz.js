/*
 * @lc app=leetcode.cn id=412 lang=javascript
 *
 * [412] Fizz Buzz
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 没有什么特别的思路，就是循环取余判断赋值，然后就过了
/* 
Accepted
8/8 cases passed (76 ms)
Your runtime beats 88.97 % of javascript submissions
Your memory usage beats 15.33 % of javascript submissions (40.3 MB)
*/
var fizzBuzz = function (n) {
  const res = []
  for (let i = 1; i <= n; i++) {
    const r3 = i % 3
    const r5 = i % 5
    if (!r3 && !r5) res.push('FizzBuzz')
    else if (!r3) res.push('Fizz')
    else if (!r5) res.push('Buzz')
    else res.push(String(i))
  }
  return res
};
// @lc code=end
