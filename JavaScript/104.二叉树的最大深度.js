/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
思路：递归，因为需要知道最大深度，so，后序遍历
*/
/* 
Accepted
39/39 cases passed (80 ms)
Your runtime beats 89.18 % of javascript submissions
Your memory usage beats 96.2 % of javascript submissions (40.2 MB)
*/
/* const maxDepth = root => {
  let max = 0
  const dfs = (node, level) => {
    if (!node) return
    node.left && dfs(node.left, level + 1)
    node.right && dfs(node.right, level + 1)
    if (!node.left && !node.right) max = Math.max(max, level)
  }
  dfs(root, 1)
  return max
} */

/* 
迭代，广度优先
*/
/* 
Accepted
39/39 cases passed (68 ms)
Your runtime beats 99.29 % of javascript submissions
Your memory usage beats 31.29 % of javascript submissions (40.7 MB)
*/
const maxDepth = root => {
  if (!root) return 0
  const q = [root]
  let ans = 0
  while(q.length) {
    let len = q.length
    while(len--) {
      const node = q.shift()
      if (node.left) q.push(node.left)
      if (node.right) q.push(node.right) 
    }
    ans++
  }
  return ans
}

// @lc code=end

