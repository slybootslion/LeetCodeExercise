/*
 * @lc app=leetcode.cn id=117 lang=javascript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
 */

// @lc code=start
/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 自己的写法，套模板，就是能过，当然并不好
/* 
var connect = function (root) {
  if (!root) return root
  const q = []
  const res = []
  q.push(root)
  while (q.length) {
    let len = q.length
    res.push([])
    while(len) {
      const node = q.shift()
      res[res.length - 1].push(node)
      node.left && q.push(node.left)
      node.right && q.push(node.right)
      len--
    }
    const nodes = res.shift()
    for (let i = 0; i < nodes.length ; i++) {
      const item = nodes[i]
      if (nodes[i + 1]) item.next = nodes[i + 1]
      else item.next = null 
    }
  }
  return root
}; 
*/

const connect = root => {
  if (!root) return root
  const q = [root]
  while (q.length) {
    const len = q.length
    let last = null
    for (let i = 1; i <= len ; i++) {
      const node = q.shift()
      node.left && q.push(node.left)
      node.right && q.push(node.right)
      if (i !== 1) last.next = node
      last = node
    }
  }
  return root
}

// @lc code=end

