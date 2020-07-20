const getIntersectionNode = (headA, headB) => {
  let p1 = headA
  let p2 = headB
  while (p1 || p2) {
    p1 = !p1 ? headB : p1.next
    p2 = !p2 ? headA : p2.next
    if (p1 === p2) return p1
  }
  return null
}

console.log(getIntersectionNode())
