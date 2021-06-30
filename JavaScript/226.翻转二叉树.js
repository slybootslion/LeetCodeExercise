/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */
/* 
方法一： 无脑递归
*/
/* 
Accepted
77/77 cases passed (100 ms)
Your runtime beats 13.89 % of javascript submissions
Your memory usage beats 97.42 % of javascript submissions (38.6 MB)
*/
/* 
var invertTree = function (root) {
  if (!root) return null
  const treeNode = new TreeNode(root.val)
  treeNode.left = root.right && invertTree(root.right)
  treeNode.right = root.left && invertTree(root.left)
  return treeNode
};
*/
/* 
同理，没有new，更好理解
*/
/* 
const invertTree = root => {
  if (!root) return null
  return {
    val: root.val,
    right: invertTree(root.left),
    left: invertTree(root.right)
  }
} 
*/
// 或者这样写，咋写都行：
const invertTree = root => {
  if (!root) return null
  const temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
}
// @lc code=end

