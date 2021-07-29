/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

/* 
思路就是二分查找法
写法可以写成循环也可以写成递归
*/
// 写法一：递归
/* 
Accepted
22/22 cases passed (64 ms)
Your runtime beats 93.86 % of javascript submissions
Your memory usage beats 57.07 % of javascript submissions (37.6 MB)
*/
/* 
var solution = function (isBadVersion) {
   return function (n) {
    let min = 1
    let max = n
    const fn = n => {
      if (min >= max) return n
      if (isBadVersion(n)) {
        max = n
        return fn(parseInt((min + max) / 2))
      } else {
        min = n + 1
        return fn(parseInt((min + max) / 2))
      }
    }
    return fn(parseInt((min + max) / 2))
  };
};
*/
// 写法二：循环
/* 
Accepted
22/22 cases passed (64 ms)
Your runtime beats 93.86 % of javascript submissions
Your memory usage beats 54.7 % of javascript submissions (37.6 MB)
*/
const solution = isBadVersion => {
  return n => {
    let min = 1
    let max = n
    while(min < max) {
      const mid = parseInt((max + min) / 2)
      isBadVersion(mid) ? max = mid : min = mid + 1
    }
    return min
  }
}
// @lc code=end

