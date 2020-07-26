function ListNode (val) {
  this.val = val
  this.next = null
}

const removeElements = (head, val) => {
  const listNode = new ListNode(null)
  let copy = listNode
  let p = head
  listNode.next = head

  while (p) {
    if (p.val === val) {
      copy.next = p.next
      p = copy.next
    } else {
      copy = p
      p = p.next
    }
  }
  return listNode.next
}

console.log(removeElements())
