/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
思路一：递归，这个没试，效率不会高的。
*/
/* 
var searchBST = function (root, val) {
  let res = null
  const bfs = node => {
    if (!node) return
    if (node.val === val) {
      res = node
      return
    }
    if (val < node.val) bfs(node.left)
    else bfs(node.right)
  }
  bfs(root)
  return res
};
*/

/* 
思路二：迭代
*/
/* 
Accepted
36/36 cases passed (88 ms)
Your runtime beats 89.84 % of javascript submissions
Your memory usage beats 27.43 % of javascript submissions (44.3 MB)
*/
const searchBST = (root, val) => {
  const q = [root]
  let res = null
  while (q.length) {
    const node = q.pop()
    if (!node) continue
    if (node.val === val) return node
    if (val < node.val) q.push(node.left)
    else q.push(node.right)
  }
  return res
}

// @lc code=end

