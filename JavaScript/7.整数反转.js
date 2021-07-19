/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
/* 
说真的，如果遇到这种问题，如果你是一个jser的话，就跳过吧，这种题，对于一个用js的来说，没啥意义，除非你想转其他语言，但是，你为什么不直接用c或者java做呢？
*/
/* 
Accepted
1032/1032 cases passed (88 ms)
Your runtime beats 91.98 % of javascript submissions
Your memory usage beats 27.24 % of javascript submissions (39.5 MB)
*/
var reverse = function (x) {
  const check = num => num >= (-Math.pow(2, 31)) && num <= (Math.pow(2, 31) - 1) ? num : 0
  const arr = x.toString().split('')
  if (arr[0] === '-') {
    arr.shift()
    return check(-(+(arr.reverse().join(''))))
  } else {
    return check(+(arr.reverse().join('')))
  }
};
// @lc code=end

