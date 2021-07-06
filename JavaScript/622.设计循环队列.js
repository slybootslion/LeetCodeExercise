/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */

// @lc code=start
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

/* 
不想用提供的模板，用class方式写了
数组，偷懒的写法
*/

class MyCircularQueue {
  constructor(k) {
    this.queue = []
    this.length = k
  }

  isEmpty() {
    return !!!this.queue.length
  }

  Front() {
    if (this.isEmpty()) return -1
    return this.queue[0]
  }

  Rear() {
    if (this.isEmpty()) return -1
    let last = null
    for (let i = 0; i < this.queue.length; i++) {
      const item = this.queue[i]
      last = item
    }
    return last
  }

  enQueue(val) {
    if (this.isFull()) return false
    this.queue.push(val)
    return true
  }

  deQueue() {
    if (this.isEmpty()) return false
    this.queue.shift()
    return true
  }

  isFull() {
    return this.queue.length >= this.length
  }
}
// @lc code=end

