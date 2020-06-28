/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const maxDepth = (root) => {
  let deepLevel = 0
  const dfs = (tree, level) => {
    if (!tree) return false
    if (!tree.left && !tree.right) deepLevel = Math.max(deepLevel, level)
    dfs(tree.left, level + 1)
    dfs(tree.right, level + 1)
  }
  dfs(root, 1)
  return deepLevel
}

maxDepth()
