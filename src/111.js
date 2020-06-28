/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minDepth = (root) => {
  if (!root) return false
  const queue = [[root, 1]]
  while (queue.length) {
    const [node, level] = queue.shift()
    if (!node.left && !node.right) return level
    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }
}

minDepth()
