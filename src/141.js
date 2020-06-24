/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* const hasCycle = (head) => {
  const arr = []
  let p = head
  while (p) {
    if (arr.includes(p.next)) return true
    arr.push(p.next)
    p = p.next
  }
  return false
} */

const hasCycle = (head) => {
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) return true
  }
  return false
}

console.log(hasCycle())
