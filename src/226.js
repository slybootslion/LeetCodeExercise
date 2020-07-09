const invertTree = (root) => {
  if (!root) return null
  return {
    val: root.val,
    right: invertTree(root.left),
    left: invertTree(root.right)
  }
}

invertTree()
