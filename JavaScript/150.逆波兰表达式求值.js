/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
/* 
思路：栈的操作。
*/
/* 
Accepted
20/20 cases passed (88 ms)
Your runtime beats 91.44 % of javascript submissions
Your memory usage beats 61.4 % of javascript submissions (40.3 MB)
*/
var evalRPN = function(tokens) {
  const stack = []
  const add = (a, b) => a + b
  const sub = (a, b) => a - b
  const mult = (a, b) => a * b
  const divi = (a, b) => a / b
  const dict = {
    '+': add,
    '-': sub,
    '*': mult,
    '/': divi
  }
  for (let i = 0; i < tokens.length ; i++) {
    const token = tokens[i]
    if (!isNaN(+token)) {
      stack.push(token)
    }else {
      const b = stack.pop()
      const a = stack.pop()
      stack.push(parseInt(dict[token](+a, +b)))
    }
  }
  return stack[0]
};
// @lc code=end

