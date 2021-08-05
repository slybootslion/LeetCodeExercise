/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
/* 
Accepted
10/10 cases passed (260 ms)
Your runtime beats 72.25 % of javascript submissions
Your memory usage beats 35.3 % of javascript submissions (51.7 MB)
*/
class Solution {
  constructor(nums) {
    this.nums = nums
    this.origin = [...nums]
  }

  reset() {
    return this.origin
  }

  shuffle() {
    return this.tools(this.nums)
  }

  tools(array) {
    let currentIndex = array.length, temporaryValue, randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }
}
// @lc code=end

