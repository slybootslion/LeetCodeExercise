/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
/* 
方法一：leetcode上的一个题解，真是平平无奇找规律小能手
https://leetcode-cn.com/problems/plus-one/solution/shu-zu-jia-yi-by-demigodliu-m2c6/
*/
/* 
Accepted
111/111 cases passed (68 ms)
Your runtime beats 96.36 % of javascript submissions
Your memory usage beats 95.59 % of javascript submissions (37.6 MB)
*/
var plusOne = function (digits) {
  let flag = false
  digits[digits.length - 1]++
  for (let i = digits.length - 1; i >= 0; i--) {
    if (flag) digits[i]++
    flag = digits[i] > 9
    digits[i] = digits[i] % 10
  }
  if (flag) digits.unshift(1)
  return digits
};

/*
方法二：
JavaScript的无耻写法，调用api一行代码：(+(digits.join('')) + 1).toString().split('')
但是这样写过不去，因为会超出JavaScript的最大运算位，所以要用BigInt
*/
/* 
Accepted
111/111 cases passed (68 ms)
Your runtime beats 96.36 % of javascript submissions
Your memory usage beats 8.18 % of javascript submissions (38.2 MB)
*/
/* 
const plusOne = digits => `${BigInt(digits.join().replace(/,/g, '')) + BigInt(1)}`.split('').map(str => +str)
*/
// @lc code=end

