function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}

const buildTree = (preorder, inorder) => {
  if (!preorder.length) return null
  const node = new TreeNode(preorder[0])
  const idx = inorder.findIndex(preorder[0])
  node.left = buildTree(preorder.slice(1, idx + 1), inorder.slice(0, idx))
  node.right = buildTree(preorder.slice(idx + 1), inorder.slice(idx + 1))
  return node
}

console.log(buildTree())
