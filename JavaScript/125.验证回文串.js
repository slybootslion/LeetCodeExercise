/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/* 
方法一：偷懒的解法，全程调用JavaScript内置API
*/
/* 
Accepted
480/480 cases passed (92 ms)
Your runtime beats 90.4 % of javascript submissions
Your memory usage beats 40.68 % of javascript submissions (41.9 MB)
*/
/* 
var isPalindrome = function(s) {
  if (!s) return true
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  const rStr = str.split('').reverse().join('')
  return str === rStr
}; 
*/

/* 
方法二：栈
*/
/* 
Accepted
480/480 cases passed (100 ms)
Your runtime beats 65.45 % of javascript submissions
Your memory usage beats 8.77 % of javascript submissions (45.6 MB)
*/
const isalnum = str => {
  return !/[^a-zA-Z0-9]/g.test(str)
}

const isPalindrome = s => {
  if (!s) return true
  let stack = []
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!isalnum(char)) continue
    else stack.push(char.toLowerCase())
  }
  for (let i = 0; i < s.length; i++) {
    const char = s[i].toLowerCase()
    if (!isalnum(char)) continue
    else {
      const str = stack.pop()
      if (str !== char) return false
    }
  }
  return true
}

/* 
方法三：双指针
*/
/* 
Accepted
480/480 cases passed (228 ms)
Your runtime beats 5.12 % of javascript submissions
Your memory usage beats 11.07 % of javascript submissions (45 MB)
*/
/* 
const isPalindrome = s => {
  let p1 = 0
  let p2 = s.length - 1
  while (p1 < p2) {
    if (!isalnum(s[p1])) {
      p1++
      continue
    }
    if (!isalnum(s[p2])) {
      p2--
      continue
    }
    const s1 = s[p1].toLowerCase()
    const s2 = s[p2].toLowerCase()
    console.log(s1, s2)
    if (s1 !== s2) return false
    p1++
    p2--
  }
  return true
}
*/
// @lc code=end

