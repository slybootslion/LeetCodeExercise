/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
/* 
我做的时候没什么思路，就是直觉的去遍历，用指针标记，判断，然后疯狂试错修改...
*/
/* 
Accepted
123/123 cases passed (108 ms)
Your runtime beats 15.49 % of javascript submissions
Your memory usage beats 17.37 % of javascript submissions (40.1 MB)
*/
/* 
var longestCommonPrefix = function (strs) {
  let res = ''
  let temp = ''
  let p = 0
  while (true && p < strs[0].length) {
    let flag = true
    for (let i = 0; i < strs.length; i++) {
      const str = strs[i]
      if (i === 0) {
        if (!str[p]) break
        temp += str[p]
      } else {
        if (!str[p]) {
          return temp.slice(0, p)
        }
        flag = temp === str.slice(0, p + 1)
        if (!flag) break
      }
    }
    if (flag && temp) res = temp
    else return res
    p++
  }
  return res
};
*/

/* 
方法二：这应该是一个正常的方法
*/
/* 
Accepted
123/123 cases passed (76 ms)
Your runtime beats 93.82 % of javascript submissions
Your memory usage beats 84.36 % of javascript submissions (38.8 MB)
*/
const longestCommonPrefix = strs => {
  if (!strs.length) return ''
  let strArr = strs[0].split('')
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strArr[i] !== strs[j].charAt(i)) return strs[0].substring(0, i)
    }
  }
  return strs[0]
}

// @lc code=end

