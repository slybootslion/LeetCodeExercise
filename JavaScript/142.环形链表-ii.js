/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
/* 
思路： 不允许修改指定的链表，所以不能在链表上打标记
但是可以用额外的方式来记录已经遍历过的节点
*/
/* 
Accepted
16/16 cases passed (96 ms)
Your runtime beats 70.46 % of javascript submissions
Your memory usage beats 10.99 % of javascript submissions (40.9 MB)
*/
/* 
var detectCycle = function (head) {
  const set = new Set()
  while (head) {
    if (set.has(head)) return head
    else set.add(head)
    head = head.next
  }
  return null
}; 
*/

/* 
快慢指针双指针也可以
leetcode上的题解：
https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
*/
/* 
Accepted
16/16 cases passed (108 ms)
Your runtime beats 25.18 % of javascript submissions
Your memory usage beats 36.13 % of javascript submissions (40.6 MB)
*/
const detectCycle = head => {
  let p1 = head
  let p2 = head

  while (p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) break
  }
  if (!p2 || !p2.next) return null

  p1 = head
  while (true) {
    if (p1 === p2) break
    p1 = p1.next
    p2 = p2.next
  }
  return p2
}

// @lc code=end

