/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
/* 
方法一：指针
*/
/* 
Accepted
66/66 cases passed (76 ms)
Your runtime beats 99.49 % of javascript submissions
Your memory usage beats 81.42 % of javascript submissions (42.3 MB)
*/
/* 
var removeElements = function (head, val) {
  const res = new ListNode(0)
  let p = head
  let copy = res
  res.next = head
  while (p) {
    if (p.val === val) {
      copy.next = p.next
      p = copy.next
    } else {
      copy = p
      p = p.next
    }
  }
  return res.next
};
*/

/* 
方法二：递归
*/
/* 
Accepted
66/66 cases passed (84 ms)
Your runtime beats 98.07 % of javascript submissions
Your memory usage beats 15.67 % of javascript submissions (42.9 MB)
*/
const removeElements = (head, val) => {
  if (!head) return null
  head.next = removeElements(head.next, val)
  return head.val === val ? head.next : head
}
// @lc code=end

