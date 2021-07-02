/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
/* 
思路：
与上一道路径总和一样，遍历到叶子节点，记录路径上每个值，然后序列化。
到叶子节点的时候，反序列化，求和比对，如果OK放到返回的数组中。
因为要遍历到叶子节点再判断，所以要后序遍历
*/
/* 
Accepted
115/115 cases passed (100 ms)
Your runtime beats 73.14 % of javascript submissions
Your memory usage beats 47.57 % of javascript submissions (42.1 MB)
*/
var pathSum = function (root, targetSum) {
  if (!root) return []
  const res = []
  const dfs = (node, valStr) => {
    if (!node.left && !node.right) {
      const arr = valStr.split(',')
      const sum = +(arr.reduce((a, b) => +a + +b))
      sum === targetSum && res.push(arr)
    }
    if (node.left) dfs(node.left, `${valStr},${node.left.val}`)
    if (node.right) dfs(node.right, `${valStr},${node.right.val}`)
  }
  dfs(root, root.val + '')
  return res
};
// @l    c code=end

