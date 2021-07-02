/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
/* 
思路: 第一反应就是层序遍历
*/
/* 
方法一：递归
*/
/* 
Accepted
215/215 cases passed (92 ms)
Your runtime beats 52.79 % of javascript submissions
Your memory usage beats 80.78 % of javascript submissions (39.2 MB)
*/
/* 
var rightSideView = function(root) {
  const res = []
  const bfs = (node, level) => {
    if (!node) return
    res[level] = node.val // 只需要保留最后一个值就OK
    node.left && bfs(node.left, level + 1)
    node.right && bfs(node.right, level + 1)
  }
  bfs(root, 0)
  return res
};
*/


/* 
方法二： 迭代
*/
/* 
Accepted
215/215 cases passed (104 ms)
Your runtime beats 16.78 % of javascript submissions
Your memory usage beats 43.95 % of javascript submissions (39.3 MB)
*/
const rightSideView = root => {
  if (!root) return []
  const res = []
  let level = 0
  const q = [root]
  while (q.length) {
    let len = q.length
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
      res[level] = node.val
    }
    // 层序完了进入下一层
    level++
  }
  return res
}
// @lc code=end

