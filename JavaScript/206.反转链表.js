/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
/* 
思路：双指针互相☞
这种基础的破题过段时间就得刷一下加深下记忆
*/
/* 
Accepted
28/28 cases passed (96 ms)
Your runtime beats 36.69 % of javascript submissions
Your memory usage beats 45.02 % of javascript submissions (39.7 MB)
*/
var reverseList = function (head) {
  let p = head
  let l = null
  while (p) {
    temp = p.next
    p.next = l
    l = p
    p = temp
  }
  return l
};
// @lc code=end

