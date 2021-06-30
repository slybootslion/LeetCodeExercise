/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
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
 * @return {TreeNode[]}
 */
/* 
思路： 后续遍历，明白每个节点长什么样，有什么样的子树，并且序列化成字符串之后放到Map中方便比对，并最后返回其中重复的。
tool是工具函数，递归后序遍历，序列化子树并与Map比对和添加结果
重点：
1、怎么知道节点自己长什么样？后续遍历
2、怎么知道其他节点根自己长一样？ 序列化方便比对
*/
/* 
Accepted
175/175 cases passed (148 ms)
Your runtime beats 63.89 % of javascript submissions
Your memory usage beats 47.22 % of javascript submissions (44.8 MB)
*/
var findDuplicateSubtrees = function (root) {
  const map = new Map()
  const res = []

  const tool = node => {
    if (!node) return '#'
    const left = tool(node.left)
    const right = tool(node.right)
    const str = `${left},${right},${node.val}`
    if (map.has(str)) {
      let c = map.get(str)
      if (c === 1) {
        res.push(node)
        map.set(str, c + 1)
      }
    } else {
      map.set(str, 1)
    }
    return str
  }

  tool(root)
  return res

};
// @lc code=end

