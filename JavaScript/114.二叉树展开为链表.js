/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
/* 
思路：
就是递归，体会一下递归的魅力，相信flatten能做好它该做的（狗屁）
具体实现，让节点左边，等于null，让右边等于原先的左边，并且连接上之前右边的节点，然后递归各个节点。
*/
/* 
Accepted
225/225 cases passed (96 ms)
Your runtime beats 73.53 % of javascript submissions
Your memory usage beats 95.99 % of javascript submissions (39.7 MB)
*/
var flatten = function(root) {
  if (!root) return
  flatten(root.left)
  flatten(root.right)
  let left = root.left
  let right = root.right
  root.left = null
  root.right = left
  let p = root
  while(p.right) {
    p = p.right
  }
  p.right = right
};
// @lc code=end

