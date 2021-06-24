/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let res
  const dfs = (node, p, q) => {
    if (!node) return false
    const lSon = dfs(node.left, p, q)
    const rSon = dfs(node.right, p, q)

    if (
      (lSon && rSon) ||
      ((node.val === p.val || node.val === q.val) && (lSon || rSon))
    ) res = node
    return rSon || lSon || node.val === p.val || node.val === q.val
  }
  dfs(root, p, q)
  return res
};

// @lc code=end

