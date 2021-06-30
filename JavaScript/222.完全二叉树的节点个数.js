/*
 * @lc app=leetcode.cn id=222 lang=javascript
 *
 * [222] 完全二叉树的节点个数
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
 * @return {number}
 */
/* 
思路：因为是完全二叉树，所以节点个数，就是所有的节点自身+左+右，递归统计。
*/
/* 
Accepted
18/18 cases passed (136 ms)
Your runtime beats 33.07 % of javascript submissions
Your memory usage beats 77.85 % of javascript submissions (56.6 MB)
*/
var countNodes = function (root) {
  if (!root) return 0
  return 1 + countNodes(root.left) + countNodes(root.right)
};
// @lc code=end

