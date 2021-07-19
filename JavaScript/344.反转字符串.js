/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
/* 
方法一：old school方式，双指针遍历
*/
/* 
Accepted
477/477 cases passed (112 ms)
Your runtime beats 80.2 % of javascript submissions
Your memory usage beats 49.55 % of javascript submissions (45 MB)
*/
var reverseString = function (s) {
  let h = 0
  let f = s.length - 1
  while (h < f) {
    const temp = s[h]
    s[h] = s[f]
    s[f] = temp
    h++
    f--
  }
};

/* 
方法二：无耻的调用api
*/
/* 
const reverseString = s => s.reverse()
*/
// @lc code=end

