/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
/* 
思路：
通过前序遍历找根，通过中序遍历找左右树，然后截取对应的数组。
剩下的交给递归
*/
/* 
Accepted
202/202 cases passed (204 ms)
Your runtime beats 30.02 % of javascript submissions
Your memory usage beats 41.38 % of javascript submissions (110.4 MB)
*/
const buildTree = (preorder, inorder) => {
  if (!inorder.length) return null
  const node = preorder[0]
  const treeNode = new TreeNode(node)
  const mid = inorder.indexOf(node)
  const iLeft = inorder.slice(0, mid)
  const pLeft = preorder.slice(1, mid + 1)
  treeNode.left = buildTree(pLeft, iLeft)
  const iRight = inorder.slice(mid + 1)
  const pRight = preorder.slice(pLeft.length + 1)
  treeNode.right = buildTree(pRight, iRight)
  return treeNode
}

// @lc code=end

