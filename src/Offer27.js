/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const mirrorTree = (root) => {
  if (root) {
    return {
      val: root.val,
      left: mirrorTree(root.right),
      right: mirrorTree(root.left)
    }
  }
  return null
}

console.log(mirrorTree())
