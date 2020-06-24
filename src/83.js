/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const deleteDuplicates = (head) => {
  let p = head
  while (p && p.next) {
    if (p.val === p.next.val) p.next = p.next.next
    else p = p.next
  }
  return head
}

console.log(deleteDuplicates())
