/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// 稍微正经一点的解法
/* 
Accepted
21/21 cases passed (72 ms)
Your runtime beats 84.76 % of javascript submissions
Your memory usage beats 7.71 % of javascript submissions (37.7 MB)
*/
class MyQueue {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  push(val) {
    this.stack1.push(val)
  }

  pop() {
    this._move()
    return this.stack2.pop()
  }

  peek() {
    this._move()
    return this.stack2.length && this.stack2[this.stack2.length - 1]
  }

  empty() {
    return !this.stack1.length && !this.stack2.length
  }

  _move() {
    if (!this.stack2.length) while (this.stack1.length) this.stack2.push(this.stack1.pop())
  }
}

// @lc code=end

