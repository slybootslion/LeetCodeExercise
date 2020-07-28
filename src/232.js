class MyQueue {
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
}

const mq = new MyQueue()
console.log(mq.push(1))
