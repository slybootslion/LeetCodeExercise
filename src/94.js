/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归
/* const inorderTraversal = root => {
  const res = []
  const rec = node => {
    if (!node) return false
    rec(node.left)
    res.push(node.val)
    rec(node.right)
  }
  rec(root)
  return res
} */

// 栈
const inorderTraversal = root => {
  const res = []
  const stack = []
  let p = root
  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    const node = stack.pop()
    res.push(node.val)
    p = node.right
  }
  return res
}
inorderTraversal()
