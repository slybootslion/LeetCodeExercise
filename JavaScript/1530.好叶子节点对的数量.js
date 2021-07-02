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
/* 
Accepted
113/113 cases passed (392 ms)
Your runtime beats 6.79 % of javascript submissions
Your memory usage beats 5.55 % of javascript submissions (51.9 MB)
*/
var countPairs = function (root, distance) {
  let count = 0
  const dfs = node => {
    if (!node) return []
    // 返回叶子节点到最近父节点的距离：1
    if (!node.left && !node.right) return [1]
    // 递归后续遍历节点数组，没一项是叶子节点到当前节点的距离
    const leftDeep = dfs(node.left)
    const rightDeep = dfs(node.right)
    console.log(leftDeep);
    // 判断是否好叶子逻辑
    for (let i = 0; i < leftDeep.length; i++) {
      const lItem = leftDeep[i]
      for (let j = 0; j < rightDeep.length; j++) {
        const rItem = rightDeep[j]
        lItem + rItem <= distance && count++
      }
    }
    // 后续遍历结束后，返回的节点数组（叶子节点到当前节点的距离+1）
    return [...leftDeep, ...rightDeep].map(c => ++c)
  }
  dfs(root)
  return count
};
// @lc code=end

