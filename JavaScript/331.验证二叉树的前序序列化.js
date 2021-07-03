/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
/* 
思路：
先反序列化字符串为一棵树
然后前序遍历这棵树，与传进来的字符串比对是否相同
*/
/* 
Accepted
151/151 cases passed (80 ms)
Your runtime beats 93.02 % of javascript submissions
Your memory usage beats 33.72 % of javascript submissions (39.6 MB)
*/
var isValidSerialization = function (preorder) {
  const arr = preorder.split(',')
  // 怎么恢复一个有空值标记的前序遍历数组为一棵树？
  const dis = arr => {
    if (!arr.length) return null
    const nodeVal = arr.shift()
    if (nodeVal === '#') return null
    const treeNode = new TreeNode(nodeVal)
    treeNode.left = dis(arr)
    treeNode.right = dis(arr)
    return treeNode
  }
  const tree = dis(arr)
  let str = ''
  const pot = node => {
    if (!node) {
      str += '#,'
      return
    }
    str += node.val + ','
    pot(node.left)
    pot(node.right)
  }
  pot(tree)
  const len = str.length
  str = str.slice(0, len - 1)
  return str === preorder
};
// @lc code=end

