/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = (root, sum) => {
  if (!root) return false
  let res = false
  const dfs = (node, s) => {
    if (!node.left && !node.right && s === sum) res = true
    if (node.left) dfs(node.left, s + node.left.val)
    if (node.right) dfs(node.right, s + node.right.val)
    return res
  }
  dfs(root, root.val)
  return res
}

hasPathSum()
