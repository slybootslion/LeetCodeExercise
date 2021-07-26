/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
/* 
怎么求二叉树的方法，就怎么求二叉搜索树的方法
*/
/* 
var lowestCommonAncestor = function (root, p, q) {
  const dfs = (node, p, q) => {
    if (!node) return false
    let lNode = dfs(node.left, p, q)
    let rNode = dfs(node.right, p, q)
    if ((lNode && rNode) || ((node.val === p.val || node.val === q.val) && (lNode || rNode))) return node
    return lNode || rNode || p.val === node.val || q.val === node.val
  }
  return dfs(root, p, q)
};
*/
/* 
官方题解
*/
/* 
Accepted
27/27 cases passed (80 ms)
Your runtime beats 98.64 % of javascript submissions
Your memory usage beats 21.16 % of javascript submissions (47.8 MB)
*/
const lowestCommonAncestor = (root, p, q) => {
  let res = root
  while (true) {
    if (p.val < res.val && q.val < res.val) res = res.left
    else if (p.val > res.val && q.val > res.val) res = res.right
    else break
  }
  return res
}

// @lc code=end

