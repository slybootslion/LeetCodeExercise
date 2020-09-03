/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const mirrorTree = (root) => {
  if (!root) return null
  return {
    val: root.val,
    right: mirrorTree(root.left),
    left: mirrorTree(root.right)
  }
}

console.log(mirrorTree())
