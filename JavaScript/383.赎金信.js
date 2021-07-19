/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
/* 
最直觉的解法，遍历筛选剔除
*/
/* 
Accepted
126/126 cases passed (88 ms)
Your runtime beats 88.1 % of javascript submissions
Your memory usage beats 22.75 % of javascript submissions (43.9 MB)
*/
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i]
    const index = magazine.indexOf(char)
    if (index > -1) magazine = magazine.replace(char, '')
    else return false
  }
  return true
};
// @lc code=end

