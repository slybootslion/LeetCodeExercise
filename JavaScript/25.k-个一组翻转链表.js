/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
/* 
方法一：分段递归
*/
/* 
Accepted
62/62 cases passed (116 ms)
Your runtime beats 30.26 % of javascript submissions
Your memory usage beats 49.87 % of javascript submissions (41.3 MB)
*/
var reverseKGroup = function (head, k) {
  const tool = (p, l) => {
    let c = null
    let h = p
    while (h) {
      let t = h.next
      h.next = c
      c = h
      h = t
      if (h == l) break
    }
    return c
  }

  let p = head
  let l = head
  for (let i = 0; i < k; i++) {
    if (!l) return head
    l = l.next
  }
  const h = tool(p, l)
  p.next = reverseKGroup(l, k)
  return h
};
// @lc code=end

