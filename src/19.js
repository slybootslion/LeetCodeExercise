function ListNode (val) {
  this.val = val
  this.next = null
}

var removeNthFromEnd = function (head, n) {
  // 初始化 dummy 结点
  const dummy = new ListNode(0)
  // dummy指向头结点
  dummy.next = head
  // 初始化快慢指针，均指向dummy
  let p1 = dummy
  let p2 = dummy

  while (n) {
    p1 = p1.next
    n--
  }

  while (p1.next) {
    p1 = p1.next
    p2 = p2.next
  }
  p2.next = p2.next.next
  return dummy.next
}

console.log(removeNthFromEnd())
