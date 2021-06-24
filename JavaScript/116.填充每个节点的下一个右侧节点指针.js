/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
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
// [1,2,3,4,5,6,7]
var connect = function (root) {
  const res = []
  const queue = []
  queue.push(root)
  while(queue.length) {
    const node = queue.shift()
    res.push([node])
    let len = queue.length
    while(len) {
      res[res.length - 1]
      queue.push()
      len--
    }
  }
  return res
};
// @lc code=end

