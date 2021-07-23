/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
/* 
思路一：计算链表长度
这是官方给的答案，这个方法，我用Java写确实是OK的，但是不知道为什么，这个方法用js写就不管用了。
谁会改谁改吧，我放弃了。
*/

/* 
方法一：栈，其实就是链表长度的变种，利用栈来计数
*/
/* 
Accepted
208/208 cases passed (116 ms)
Your runtime beats 6.04 % of javascript submissions
Your memory usage beats 82.02 % of javascript submissions (39.1 MB)
*/
/* 
const removeNthFromEnd = (head, n) => {
  const d = new ListNode(0, head)
  let stack = []
  let p = d
  while (p) {
    stack.push(p)
    p = p.next
  }
  for (let i = 0; i < n; i++) stack.pop()
  const current = stack.pop()
  current.next = current.next.next
  return d.next
}

*/
/* 
方法二：快慢双指针。
*/
/* 
Accepted
208/208 cases passed (68 ms)
Your runtime beats 96.87 % of javascript submissions
Your memory usage beats 85.57 % of javascript submissions (39 MB)
*/
const removeNthFromEnd = (head, n) => {
  let d = new ListNode(0, head)
  let fast = head
  let slow = d
  for (let i = 0; i < n; i++) fast = fast.next
  while (fast) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return d.next
}

// @lc code=end

