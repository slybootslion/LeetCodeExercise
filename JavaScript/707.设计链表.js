/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
// 数组的偷懒写法 JavaScript粗糙设计的优势
/* 
class MyLinkedList {
  constructor() {
    this.link = []
  }

  get(index) {
    return this.link[index] || -1
  }

  addAtHead(val) {
    this.link.unshift(val)
  }

  addAtTail(val) {
    this.link.push(val)
  }


  addAtIndex(index, val) {
    if (index > this.link.length) return
    if (index < 0) this.addAtTail(val)
    this.link.splice(index, 0, val)
  }

  deleteAtIndex(index) {
    if (index >= 0 && index < this.link.length) this.link.splice(index, 1)
  }
}
*/

/* 
Accepted
60/60 cases passed (172 ms)
Your runtime beats 46.83 % of javascript submissions
Your memory usage beats 13.63 % of javascript submissions (46.7 MB)
*/

class MyLinkedList {
  constructor() {
    this.link = null
  }

  get(index) {
    let head = this.link
    for (let i = 0; i < index; i++) {
      if (!head) break
      head = head.next
    }
    return head ? head.val : -1
  }

  addAtHead(val) {
    this.link = { val, next: this.link }
  }

  addAtTail(val) {
    let head = this.link
    if (!head) {
      this.link = { val, next: null }
      return
    }
    while (head.next) {
      head = head.next
    }
    head.next = { val, next: null }
  }

  addAtIndex(index, val) {
    if (index <= 0) {
      this.addAtHead(val)
      return
    }

    let head = this.link
    index--
    while (head.next && index) {
      head = head.next
      index--
    }
    if (index > 0) return
    const temp = head.next
    head.next = { val, next: temp }
  }

  deleteAtIndex(index) {
    let head = this.link
    // if (!head) return
    if (index == 0) {
      this.link = this.link.next
      return
    }
    let prev
    while (head.next && index) {
      prev = head
      head = head.next
      index--
    }
    if (index > 0) return
    prev.next = head.next
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

