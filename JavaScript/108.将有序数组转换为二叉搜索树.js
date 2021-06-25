/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
/* 
题解：
拿到数组中间的值作为根节点，这样分配左右子树的时候容易保持高度平衡。中序遍历。
*/
/*
成绩：
31/31 cases passed (92 ms)
Your runtime beats 88.78 % of javascript submissions
Your memory usage beats 32.13 % of javascript submissions (40.6 MB)
*/
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null
  const midIndex = parseInt(nums.length / 2)
  const rootNode = new TreeNode(nums[midIndex])
  const lNums = nums.slice(0, midIndex)
  const rNums = nums.slice(midIndex + 1)
  rootNode.left = sortedArrayToBST(lNums)
  rootNode.right = sortedArrayToBST(rNums)
  return rootNode
};
// @lc code=end

