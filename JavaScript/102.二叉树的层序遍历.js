/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */

// 递归
const levelOrder = root => {
  if (!root) return []
  const res = []
  const dfs = (node, level) => {
    if (!node) return
    if (res.length === level) res.push([])
    res[level].push(node.val)
    node.left && dfs(node.left, level + 1)
    node.right && dfs(node.right, level + 1)
  }
  dfs(root, 0)
  return res
}

// 迭代算法
/*
var levelOrder = function (root) {
  if (!root) return []
  const q = []
  const res = []
  q.push(root)
  while (q.length) {
    let len = q.length
    res.push([])
    while (len) {
      const node = q.shift()
      res[res.length - 1].push(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
      len--
    }
  }
  return res
};
*/

// @lc code=end

