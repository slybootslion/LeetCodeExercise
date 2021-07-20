/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @return {ListNode}
 */
// 指针方法 简单直观好理解效率高
/* 
Accepted
166/166 cases passed (88 ms)
Your runtime beats 83.5 % of javascript submissions
Your memory usage beats 86.17 % of javascript submissions (39.6 MB)
*/
/* 
const deleteDuplicates = head => {
  let p = head
  while (p && p.next) {
    if (p.val === p.next.val) p.next = p.next.next
    else p = p.next
  }
  return head
}
*/

//  递归 yyds
/* 
Accepted
166/166 cases passed (80 ms)
Your runtime beats 94.25 % of javascript submissions
Your memory usage beats 88.01 % of javascript submissions (39.5 MB)
*/
const deleteDuplicates = head => {
  if (!head || !head.next) return head
  const l = deleteDuplicates(head.next)
  if (l.val === head.val) {
    head.next = head.next.next
    return l
  } else {
    return head
  }
}

// @lc code=end

