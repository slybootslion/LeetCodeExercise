/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
/**
 * initialize your data structure here.
 */
class MinStack {
  constructor () {
    this.stack = []
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push (x) {
    this.stack.push(x)
  }

  /**
   * @return {void}
   */
  pop () {
    return this.stack.pop()
  }

  /**
   * @return {number}
   */
  top () {
    const len = this.stack.length
    return this.stack[len - 1]
  }

  /**
   * @return {number}
   */
  getMin () {
    const temp = [...this.stack]
    temp.sort((a, b) => a - b)
    return temp.shift()
  }
}

const ms = new MinStack()
console.log(ms)
