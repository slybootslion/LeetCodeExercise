/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

/* 
方法一：偷懒写法，调用api，parseInt是个好东西
*/
/* 
Accepted
1082/1082 cases passed (96 ms)
Your runtime beats 82.92 % of javascript submissions
Your memory usage beats 87.72 % of javascript submissions (39.1 MB)
*/
const tool = num => num < 0 ? (num < -Math.pow(2, 31) ? -Math.pow(2, 31) : num) : (num > Math.pow(2, 31) - 1 ? Math.pow(2, 31) - 1 : num)

/* 
var myAtoi = function (s) {
  s = parseInt(s.trim())
  return isNaN(s) ? 0 : tool(s)
};
*/

/* 
方法二：遍历 + 判断
官方题解说，可能会“一不小心写出臃肿代码”的题，确实是这样，但是官方的解法看不懂鸭
不过这个其实也还好，没有“臃肿”到不能忍受
*/
/* 
1082/1082 cases passed (84 ms)
Your runtime beats 95.9 % of javascript submissions
Your memory usage beats 48.21 % of javascript submissions (39.8 MB)
*/
const check = char => /[0-9-+]/.test(char)

const myAtoi = s => {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char === ' ' && !str) continue
    else if (check(char)) {
      if (str) {
        if (typeof Number(char) === 'number' && !isNaN(char)) str += char
        else break
      }
      else str += char
    }
    else if (!check(char) && !str) {
      str = '0'
      break
    }
    else if (!check(char) && str !== '') break
  }
  return isNaN(Number(str)) ? 0 : tool(Number(str))
}

// @lc code=end

