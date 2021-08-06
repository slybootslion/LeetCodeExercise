/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/* 
标准答案：用一个栈来存储可能的最小值，取值的时候是常数时间内检索到最小元素。
*/
/* 
Accepted
31/31 cases passed (112 ms)
Your runtime beats 89.22 % of javascript submissions
Your memory usage beats 14.99 % of javascript submissions (46.1 MB)
*/
class MinStack {
  constructor() {
    this.stack = []
    this.min = [Infinity]
  }

  push(x) {
    this.stack.push(x)
    this.min.push(Math.min(this.min[this.min.length - 1], x))
  }

  pop() {
    this.stack.pop()
    this.min.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.min[this.min.length - 1]
  }
}
/* 
但是，无视题目要求，只求能过的话，可以使用下面无耻的方法，但肯定不符合题目要求。
*/
/* 
class MinStack {
  constructor () {
    this.stack = []
  }

  push (x) {
    this.stack.push(x)
  }

  pop () {
    return this.stack.pop()
  }

  top () {
    const len = this.stack.length
    return this.stack[len - 1]
  }

  getMin () {
    const temp = [...this.stack]
    temp.sort((a, b) => a - b)
    return temp.shift()
  }
}
*/
// @lc code=end

