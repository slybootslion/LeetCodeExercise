/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
/* 
Accepted
60/60 cases passed (88 ms)
Your runtime beats 48.23 % of javascript submissions
Your memory usage beats 58.99 % of javascript submissions (38.9 MB)
*/
/*
var isSameTree = function(p, q) {
  let res = true
  const func = (p, q) => {
    if (!res) return
    if (!p && !q) return

    if (!p || !q) {
      res = false
      return
    }
    
    res = p.val === q.val
    func(p.left, q.left)
    func(p.right, q.right)
  }
  func(p, q)
  return res
};
 */

/* 
补一个写的代码比较少的 其实思路一样
*/
const isSameTree = (p, q) => {
  if (!p && !q) return true
  if (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) return true
  return false
}

// @lc code=end

