function ListNode(val) {
  this.val = val
  this.next = null
}

const deleteNode = (head, val) => {
  const dummy = new ListNode()
  dummy.next = head

  let p1 = dummy.next
  let p2 = dummy

  while (p1) {
    if (p1.val === val) {
      p2.next = p2.next.next
      break
    }
    p1 = p1.next
    p2 = p2.next
  }
  return dummy.next
}

deleteNode([], 1)
