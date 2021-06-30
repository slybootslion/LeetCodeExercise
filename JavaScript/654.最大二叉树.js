/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
/* 
思路：递归，明确递归要干嘛
细节，找到最大的值，然后构建树，左节点就是数组最大值的左边，右节点就是数组最大值的右边，剩下的交给递归去处理
明白了这个，中等难度的也不过如此
*/
/* 
Accepted
107/107 cases passed (132 ms)
Your runtime beats 80.4 % of javascript submissions
Your memory usage beats 27.28 % of javascript submissions (45 MB)
*/
var constructMaximumBinaryTree = function (nums) {
  if (!nums.length) return null
  const max = Math.max(...nums)
  const index = nums.indexOf(max)
  const leftArr = nums.slice(0, index)
  const rightArr = nums.slice(index + 1)
  const node = new TreeNode(max)
  node.left = constructMaximumBinaryTree(leftArr)
  node.right = constructMaximumBinaryTree(rightArr)
  return node
};
// @lc code=end

