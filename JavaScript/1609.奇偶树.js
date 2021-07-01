/*
 * @lc app=leetcode.cn id=1609 lang=javascript
 *
 * [1609] 奇偶树
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
思路：
层序遍历筛选
再遍历判断
这个其实写的有点愣，我就是想用迭代方式层序遍历，但是如果递归遍历的会更简单一些。
*/
/* 
Accepted
105/105 cases passed (384 ms)
Your runtime beats 19.82 % of javascript submissions
Your memory usage beats 6.31 % of javascript submissions (86.2 MB)
*/
var isEvenOddTree = function (root) {
  if (!root) return []
  const res = []
  let level = 0
  const q = [root]
  while (q.length) {
    const len = q.length
    res.push([])
    for (let i = 0; i < len; i++) {
      const node = q.shift()
      res[level].push(node.val)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
    }
    level++
  }
  const check = (list, level) => {
    if (!(level % 2)) {
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        if (!(item % 2)) return false
        if (list[i + 1] && list[i + 1] <= item) return false
      }
    } else {
      for (let i = 0; i < list.length; i++) {
        const item = list[i]
        if (item % 2) return false
        if (list[i + 1] && list[i + 1] >= item) return false
      }
    }
    return true
  }
  let len = res.length
  level = 0
  while (len--) {
    if (!check(res[level], level)) return false
    level++
  }
  return true
};
// @lc code=end

