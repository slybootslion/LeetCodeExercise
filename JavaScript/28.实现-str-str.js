/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/* 
方法一：无耻调用api大法好
*/
/* 
Accepted
80/80 cases passed (64 ms)
Your runtime beats 99.6 % of javascript submissions
Your memory usage beats 39.27 % of javascript submissions (38.9 MB)
*/
/* 
var strStr = function(haystack, needle) {
  if (!needle) return 0
  return haystack.indexOf(needle)
};
*/

/* 
方法二：看似递归，实则迭代
*/
/* 
Accepted
80/80 cases passed (76 ms)
Your runtime beats 92.85 % of javascript submissions
Your memory usage beats 5 % of javascript submissions (43.4 MB)
*/
/* 
const strStr = (haystack, needle) => {
  if (!needle) return 0
  let index = 0
  const findIndex = () => {
    index = haystack.indexOf(needle[0], index)
    const str = haystack.slice(index, index + needle.length)
    if (str.length < needle.length) {
      index = -1 
      return
    }
    if (str === needle) return
    else {
      index++
      findIndex()
    }
  }
  findIndex()
  return index
}
*/

/* 
方法三：大概是真正正确的打开方式
*/
/* 
Accepted
80/80 cases passed (80 ms)
Your runtime beats 85.42 % of javascript submissions
Your memory usage beats 13.18 % of javascript submissions (39.8 MB)
*/
const strStr = (haystack, needle) => {
  if (!needle) return 0
  for (let i = 0; i < haystack.length; i++) {
    const char = haystack[i]
    if (char === needle[0]) {
      let str = haystack.slice(i, i + needle.length)
      if (str.length < needle.length) return -1
      if (str === needle) return i
    }
  }
  return -1
}

// @lc code=end

