/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
/* 
方法一： 先遍历到left， 再遍历到right，反转left到right之间的链表
*/
/* 
Accepted
44/44 cases passed (80 ms)
Your runtime beats 80.62 % of javascript submissions
Your memory usage beats 26.98 % of javascript submissions (38.1 MB)
*/
/* 
var reverseBetween = function (head, left, right) {
  const reverse = head => {
    let c = head
    let p = null
    while (c) {
      const next = c.next
      c.next = p
      p = c
      c = next
    }
  }

  const link = new ListNode(-1)
  link.next = head
  let p = link
  for (let i = 0; i < left - 1; i++) {
    p = p.next
  }
  let rightNode = p
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next
  }
  let leftNode = p.next
  let current = rightNode.next
  rightNode.next = null
  p.next = null
  reverse(leftNode)
  p.next = rightNode
  leftNode.next = current
  return link.next
};
*/

/* 
方法二：
递归方式
 */
/* 
Accepted
44/44 cases passed (68 ms)
Your runtime beats 99.34 % of javascript submissions
Your memory usage beats 6.07 % of javascript submissions (39 MB)
*/
const reverseBetween = (head, left, right) => {
  let current
  const reversOne = (head, n) => {
    if (n === 1) {
      current = head.next
      return head
    }
    const last = reversOne(head.next, n - 1)
    head.next.next = head
    head.next = current
    return last
  }

  if (left === 1) return reversOne(head, right)
  head.next = reverseBetween(head.next, left - 1, right - 1)
  return head
}

// @lc code=end

