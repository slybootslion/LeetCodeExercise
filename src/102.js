/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/* const levelOrder = root => {
  if (!root) return []
  const queue = [[root, 0]]
  const res = []
  while (queue.length) {
    const [node, level] = queue.shift()
    if (!res[level]) res[level] = []
    res[level].push(node.val)
    if (node.left) queue.push([node.left, level + 1])
    if (node.right) queue.push([node.right, level + 1])
  }
  return res
} */

const levelOrder = root => {
  if (!root) return []
  const queue = [root]
  const res = []
  while (queue.length) {
    let len = queue.length
    res.push([])
    while (len--) {
      const node = queue.shift()
      res[res.length - 1].push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
}

levelOrder()
