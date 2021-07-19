/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* 
遍历，筛选，剔除，判断，完全符合就是true，否则就是false
*/
const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (t.indexOf(char) < 0) return false
    t = t.replace(char, '')
  }
  return true
}
// @lc code=end

