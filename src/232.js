/* class MyQueue {
  constructor () {
    this.queue = []
  }

  push (ele) {
    this.queue.push(ele)
  }

  pop () {
    return this.queue.shift()
  }

  peek () {
    return this.queue[0]
  }

  empty () {
    return !this.queue.length
  }
} */

class MyQueue {
  constructor () {
    this.stack1 = []
    this.stack2 = []
  }

  push (ele) {
    this.stack1.push(ele)
  }

  pop () {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    return this.stack2.pop()
  }

  peek () {
    if (!this.stack2.length) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop())
      }
    }
    const len = this.stack2.length
    return len && this.stack2[len - 1]
  }

  empty () {
    return !this.stack1.length && !this.stack2.length
  }
}

const mq = new MyQueue()
console.log(mq.push(1))
