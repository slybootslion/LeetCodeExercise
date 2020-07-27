class MyStack {
  constructor () {
    this.stack = []
  }

  push (ele) {
    this.stack.push(ele)
  }

  pop () {
    return this.stack.pop()
  }

  top () {
    return this.stack[this.stack.length - 1]
  }

  empty () {
    return !this.stack.length
  }
}

const ms = new MyStack()
ms.push('a')
