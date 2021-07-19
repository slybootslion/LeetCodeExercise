/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
/* 
方法一：指针遍历，比较，更改赋值，很old school
*/
/* 
const mergeTwoLists = (l1, l2) => {
  let res = new ListNode(0)
  let p = res
  while (l1 && l2) {
    if (l1.val < l2.val) {
      p.next = l1
      l1 = l1.next
    } else {
      p.next = l2
      l2 = l2.next
    }
    p = p.next
  }
  if (l1) p.next = l1
  if (l2) p.next = l2
  return res.next
} 
*/

/* 
方法二：递归
*/
/* 
Accepted
208/208 cases passed (76 ms)
Your runtime beats 96.62 % of javascript submissions
Your memory usage beats 43.04 % of javascript submissions (39.5 MB)
*/
const mergeTwoLists = (l1, l2) => {
  if (!l1) return l2
  if (!l2) return l1
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}
// @lc code=end

