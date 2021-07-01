/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
/* 
思路：
通过后续遍历来找根节点，通过中序遍历找左右子树（长度）
剩下的交给递归，其他画个图还是比较清晰的
*/
/* 
Accepted
202/202 cases passed (208 ms)
Your runtime beats 23.98 % of javascript submissions
Your memory usage beats 23.69 % of javascript submissions (110.6 MB)
*/
var buildTree = function (inorder, postorder) {
  if (!inorder.length) return null
  const node = postorder[postorder.length - 1]
  const treeNode = new TreeNode(node)
  const mid = inorder.indexOf(node)
  const iLeft = inorder.slice(0, mid)
  const pLeft = postorder.slice(0, iLeft.length)
  treeNode.left = buildTree(iLeft, pLeft)
  const iRight = inorder.slice(mid + 1)
  const pRight = postorder.slice(iLeft.length, iLeft.length + iRight.length)
  treeNode.right = buildTree(iRight, pRight)
  return treeNode
};
// @lc code=end

