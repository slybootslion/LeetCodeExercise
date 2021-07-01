/*
 * @lc app=leetcode.cn id=1530 lang=javascript
 *
 * [1530] 好叶子节点对的数量
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
 * @param {number} distance
 * @return {number}
 */
/* 
思路：
一开始的思路，后序遍历收集所有序列化的叶子节点的路径，然后暴力遍历比对，但是提交频繁出错，不停修正比对的方法，而且时间复杂度太高，放弃了。

贴个后续遍历更好理解的算法：
https://leetcode-cn.com/problems/number-of-good-leaf-nodes-pairs/solution/js-tshou-xu-by-blzbanme/
*/
var countPairs = function (root, distance) {
  let count = 0
  const foo = node => {
    if (!node) return []
    if (!node.left  && !node.right) return [0]
    const l = []
    const lL = foo(node.left)
    const rL = foo(node.right)
    for (let i = 0; i < lL.length ; i++) {
      const item = lL[i]
      if (item < distance) l.push(item + 1)
    }
    for (let i = 0; i < rL.length ; i++) {
      const item = rL[i]
      if (item < distance) l.push(item + 1)
    }
    for (let i = 0; i < lL.length ; i++) {
      const item = lL[i]
      for (let j = 0; j < rL.length ; j++) {
        const jtem = rL[j]
        if (item + jtem + 2 <= distance) count++ 
      }
    }
    return l
  }
  foo(root)
  return count
};
// @lc code=end

