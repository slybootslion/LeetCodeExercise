/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
/* 
方法一：利用api，奇技淫巧，但是能过
*/
/* 
Accepted
104/104 cases passed (108 ms)
Your runtime beats 87.36 % of javascript submissions
Your memory usage beats 74.19 % of javascript submissions (41 MB)
*/
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length ; i++) if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i
  return -1
}; 


/* 
方法二：利用map记录
*/
/* 
Accepted
104/104 cases passed (116 ms)
Your runtime beats 78 % of javascript submissions
Your memory usage beats 46.5 % of javascript submissions (41.4 MB)
*/
/* 
const firstUniqChar = s => {
  const map = new Map()
  for (let i = 0; i < s.length ; i++) {
    const char = s[i]
    if (map.has(char)) map.set(char, map.get(char) + 1)
    else map.set(char, 1)
  }
  for (const m of map) {
    if (m[1] === 1) return s.indexOf(m[0])
  }
  return -1
}
*/
// @lc code=end

