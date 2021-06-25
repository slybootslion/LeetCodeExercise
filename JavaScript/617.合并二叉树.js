/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
/* 
思路：
从根节点同时遍历两棵树，并且合并。
对一个节点合并之后，对该节点的左右子树进行合并，这是一个递归的过程。 
递归返回的条件：
1. 两个节点都为空，返回空
2. 两个节点没有空，返回两个节点值的和的新节点
3. 其中一个位空，返回另一个节点
*/
/* 
Accepted
182/182 cases passed (120 ms)
Your runtime beats 87.01 % of javascript submissions
Your memory usage beats 26.79 % of javascript submissions (45.4 MB)
*/
var mergeTrees = function (root1, root2) {
  if (!root1) return root2
  if (!root2) return root1
  const treeNode = new TreeNode(root1.val + root2.val)
  treeNode.left = mergeTrees(root1.left, root2.left)
  treeNode.right = mergeTrees(root1.right, root2.right)
  return treeNode
};
// @lc code=end

