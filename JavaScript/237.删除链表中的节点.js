/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
/* 
这个题的难度是简单，不过一开始看题完全摸不着头脑，你就传了一个参数，为啥要让删除链表中的值？到底遍历啥玩意呢？
but，其实这道题so easy。要删的就是当前节点，就把当前节点弄成下一个节点的值，然后把指针指向下一个的下一个就OK了，真是笑skr人。
*/
/* 
Accepted
41/41 cases passed (68 ms)
Your runtime beats 99.52 % of javascript submissions
Your memory usage beats 58.45 % of javascript submissions (39.6 MB)
*/
var deleteNode = function (node) {
  node.val = node.next.val
  node.next = node.next.next
};
// @lc code=end

