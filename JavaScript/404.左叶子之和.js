/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 思路：算是比较简单了，递归计算，就是加一些判断只计算左叶子节点的值。
 but，还是要注意审题，前面两次提交错了没注意题目是问什么。
*/
/* 
方法一：递归
*/
/* 
Accepted
100/100 cases passed (96 ms)
Your runtime beats 38.77 % of javascript submissions
Your memory usage beats 96.31 % of javascript submissions (39.4 MB)
*/
/* 
var sumOfLeftLeaves = function(root) {
  let count = 0
  const ldr = (node, state = false) => {
    if (!node) return
    node.left && ldr(node.left, true)
    if (!node.left && !node.right && state) count = count + node.val
    node.right && ldr(node.right)
  }
  ldr(root)
  return count
};
*/
/* 
方法二：迭代
*/
/* 
Accepted
100/100 cases passed (84 ms)
Your runtime beats 86.15 % of javascript submissions
Your memory usage beats 98.46 % of javascript submissions (39.2 MB)
*/
const sumOfLeftLeaves = root => {
  let count = 0
  const arr = [root]
  while (arr.length) {
    const node = arr.shift()
    if (node.state && !node.left && !node.right) count += node.val
    if (node.left) {
      node.left.state = true
      arr.push(node.left)
    }
    node.right && arr.push(node.right)
  }
  return count
}
// @lc code=end

