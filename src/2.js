// https://leetcode-cn.com/problems/add-two-numbers/

class ListNode {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

const addTwoNumbers = (l1, l2) => {
  const l3 = new ListNode(0)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carry
    carry = Math.floor(val / 10)
    p3.next = new ListNode(val % 10)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }
  if (carry) p3.next = new ListNode(carry)
  return l3.next
}

console.log(addTwoNumbers())
