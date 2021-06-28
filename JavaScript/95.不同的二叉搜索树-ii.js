/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
/* 
思路：二叉搜索树的概念就是左数的值，小于节点，右侧的值大于节点。
*/
/* 
Accepted
8/8 cases passed (116 ms)
Your runtime beats 40.45 % of javascript submissions
Your memory usage beats 21.72 % of javascript submissions (44.4 MB)
*/
var generateTrees = function (n) {
  if (n === 0) return []

  const buildTree = (start, end) => {
    const result = []
    if (start > end) return [null]

    for (let i = start; i <= end; i++) {
      const left = buildTree(start, i - 1)
      const right = buildTree(i + 1, end)

      for (let l = 0; l < left.length; l++) {
        for (let r = 0; r < right.length; r++) {
          let treeNode = new TreeNode(i)
          treeNode.left = left[l]
          treeNode.right = right[r]
          result.push(treeNode)
        }
      }
    }
    return result
  }

  return buildTree(1, n)
};
// @lc code=end

