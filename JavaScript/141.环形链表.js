/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
/* 
思路：快慢双指针，没什么好解释的了
有几次提交错，我判断的条件是val值，在个别用例中出错，应该对比每一个节点本身
*/
/* 
Accepted
19/19 cases passed (96 ms)
Your runtime beats 61.83 % of javascript submissions
Your memory usage beats 26.93 % of javascript submissions (40.5 MB)
*/

/* 
var hasCycle = function (head) {
  let p1 = head
  let p2 = head
  while (p1 && p2 && p2.next) {
    p1 = p1.next
    p2 = p2.next.next
    if (p1 === p2) return true
  }
  return false
};  
*/

/* 
思路： 单指针，挂载额外的属性
*/
/* 
Accepted
19/19 cases passed (108 ms)
Your runtime beats 24.15 % of javascript submissions
Your memory usage beats 57.58 % of javascript submissions (40.2 MB)
*/
/* 
const hasCycle = head => {
  while (head) {
    if (head.isPass) return true
    else {
      head.isPass = true
      head = head.next
    }
  }
  return false
} 
*/

/* 
思路：额外空间来管理遍历过的元素
*/
/* 
Accepted
19/19 cases passed (100 ms)
Your runtime beats 42.85 % of javascript submissions
Your memory usage beats 7.33 % of javascript submissions (41.9 MB)
*/
const hasCycle = head => {
  const set = new WeakSet()
  while(head && head.next) {
    if (set.has(head)) return true
    else set.add(head)
    head = head.next
  }
  return false
} 

// @lc code=end

