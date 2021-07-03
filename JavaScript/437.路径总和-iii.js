/*
 * @lc app=leetcode.cn id=437 lang=javascript
 *
 * [437] 路径总和 III
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
 * @return {number}
 */
/* 
思路：
我想不出什么特别的方法，就是暴力遍历破解
我写的挺憨的，层序遍历用的迭代方式，所以看上去挺繁琐。
先从序遍历，收集每一层的节点，向下遍历，如果有求和匹配的，就记录。需要注意的是，节点匹配也算。
*/
/* 
Accepted
126/126 cases passed (132 ms)
Your runtime beats 59.02 % of javascript submissions
Your memory usage beats 12.13 % of javascript submissions (44.1 MB)
*/
/* 
var pathSum = function (root, targetSum) {
  if (!root) return 0
  const tool = floor => {
    let count = 0
    for (let i = 0; i < floor.length; i++) {
      const root = floor[i]
      if (root.val === targetSum) ++count
      const dfs = (node, val) => {
        if (!node) return
        if (node.left) {
          const sum = node.left.val + val
          sum === targetSum && ++count
          dfs(node.left, sum)
        }
        if (node.right) {
          const sum = node.right.val + val
          sum === targetSum && ++count
          dfs(node.right, sum)
        }
      }
      dfs(root, root.val)
    }
    return count
  }

  const bank = []
  const q = [root]
  let level = 0
  while (q.length) {
    const len = q.length
    if (!bank[level]) bank[level] = []
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      bank[level].push(node)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    if (!bank[level].length) bank.pop()
    ++level
  }
  let res = 0
  for (let i = 0; i < bank.length; i++) {
    const floor = bank[i]
    res += tool(floor)
  }
  return res
};
*/

// 试一下递归
/* 
Accepted
126/126 cases passed (156 ms)
Your runtime beats 25.41 % of javascript submissions
Your memory usage beats 13.94 % of javascript submissions (43.1 MB)
*/
const pathSum = (root, targetSum) => {
  if (!root) return 0
  /* 判断，核心算法 */
  const tool = floor => {
    let count = 0
    for (let i = 0; i < floor.length; i++) {
      const root = floor[i]
      if (root.val === targetSum) ++count
      const dfs = (node, val) => {
        if (!node) return
        if (node.left) {
          const sum = node.left.val + val
          sum === targetSum && ++count
          dfs(node.left, sum)
        }
        if (node.right) {
          const sum = node.right.val + val
          sum === targetSum && ++count
          dfs(node.right, sum)
        }
      }
      dfs(root, root.val)
    }
    return count
  }

  const bank = []
  const bfs = (node, level) => {
    if (!bank[level]) bank[level] = []
    bank[level].push(node)
    node.left && bfs(node.left, level + 1)
    node.right && bfs(node.right, level + 1)
  }
  bfs(root, 0)
  let res = 0
  for (let i = 0; i < bank.length ; i++) {
    const floor = bank[i]
    res += tool(floor)
  }
  return res
}

// @lc code=end
