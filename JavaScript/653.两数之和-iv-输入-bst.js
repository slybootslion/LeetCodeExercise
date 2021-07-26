/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
/* 
把一棵树，变成一个链表，然后解。就是把这道题变成最简单的两数之和。
能过，但肯定不是最优解。
*/
/* 
Accepted
422/422 cases passed (104 ms)
Your runtime beats 87.4 % of javascript submissions
Your memory usage beats 49.58 % of javascript submissions (46.8 MB)
*/
/* 
var findTarget = function (root, k) {
  const link = []
  const bfs = node => {
    if (!node) return
    link.push(node.val)
    node.left && bfs(node.left)
    node.right && bfs(node.right)
  }
  bfs(root)
  const map = new Map()
  for (let i = 0; i < link.length; i++) {
    if (map.has(link[i])) return true
    else map.set(k - link[i], true)
  }
  return false
};
*/

/* 
但是，既然用好一个hash值来存储，为什么要遍历一遍放链表里呢？难道不能直接遍历这棵树的是时候就判断吗？
so，上面的代码可以简化成下面的。
*/
const findTarget = (root, k) => {
  let map = new Map()
  let res = false
  const bfs = node => {
    if (!node) return
    if (map.has(node.val)) {
      res = true
      return
    } else {
      map.set(k - node.val, true)
    }
    node.left && bfs(node.left)
    node.right && bfs(node.right)
  }
  bfs(root)
  return res
}



// @lc code=end

