/*
 * @lc app=leetcode.cn id=701 lang=javascript
 *
 * [701] 二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
/* 
根据二叉搜索树的概念来写
*/
/* 
Accepted
35/35 cases passed (132 ms)
Your runtime beats 70.72 % of javascript submissions
Your memory usage beats 38.65 % of javascript submissions (45.9 MB)
*/
var insertIntoBST = function (root, val) {
  if (!root) return new TreeNode(val)
  let p = root
  while(p) {
    if (val < p.val) {
      if (!p.left) {
        p.left = new TreeNode(val)
        break
      }
      p = p.left
    } else {
      if (!p.right) {
        p.right = new TreeNode(val)
        break
      }
      p = p.right
    }
  }
  return root
};
// @lc code=end

