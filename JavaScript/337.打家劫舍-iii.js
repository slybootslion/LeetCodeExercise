/*
 * @lc app=leetcode.cn id=337 lang=javascript
 *
 * [337] 打家劫舍 III
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
 * @return {number}
 */
/* 
贴个官方题解，我没解出来
https://leetcode-cn.com/problems/house-robber-iii/solution/da-jia-jie-she-iii-by-leetcode-solution/
*/
/* 
Accepted
124/124 cases passed (104 ms)
Your runtime beats 50.21 % of javascript submissions
Your memory usage beats 21.39 % of javascript submissions (43.6 MB)
*/
var rob = function (root) {
  const f = new WeakMap()
  const g = new WeakMap()

  const dfs = node => {
    if (!node) return
    dfs(node.left)
    dfs(node.right)
    // 后续遍历
    f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
    g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) + Math.max(f.get(node.right) || 0, g.get(node.right) || 0));
  }
  dfs(root)
  return Math.max((f.get(root) || 0), (g.get(root) || 0))
};
// @lc code=end

