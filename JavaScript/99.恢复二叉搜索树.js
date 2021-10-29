/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
/*
Accepted
1919/1919 cases passed (172 ms)
Your runtime beats 13.86 % of javascript submissions
Your memory usage beats 21.09 % of javascript submissions (47.5 MB)
*/
var recoverTree = function (root) {
  const nums = []
  const inorder = node => {
    if (!node) return
    inorder(node.left)
    nums.push(node.val)
    inorder(node.right)
  }
  inorder(root)

  const findTowSwapped = () => {
    let left = -1, right = -1
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i]
      if (left < 0) {
        if (num > nums[i + 1]) left = i
      } else {
        if (num < nums[i - 1]) right = i
      }
    }
    return [nums[left], nums[right]]
  }

  const [left, right] = findTowSwapped()
  const recover = (node, count, x, y) => {
    if (!node) return
    if (node.val === x || node.val === y) {
      node.val = node.val === x ? y : x
      if (--count === 0) return
    }
    recover(node.left, count, x, y)
    recover(node.right, count, x, y)
  }
  recover(root, 2, left, right)
};
// @lc code=end

