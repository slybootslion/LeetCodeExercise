/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
/* 
Accepted
80/80 cases passed (88 ms)
Your runtime beats 88.87 % of javascript submissions
Your memory usage beats 19.46 % of javascript submissions (42.4 MB)
*/
var isValidBST = function (root) {
  const tools = (node, min, max) => {
    if (!node) return true
    if (node.val <= min || node.val >= max) return false
    return tools(node.left, min, node.val) && tools(node.right, node.val, max)
  }
  return tools(root, -Infinity, Infinity)
};
// @lc code=end

