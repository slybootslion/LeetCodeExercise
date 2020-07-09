const isSymmetric = (root) => {
  if (!root) return true
  const isMirror = (left, right) => {
    if (!left && !right) return true
    return !!(left && right && left.val === right.val &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left))
  }
  return isMirror(root.left, root.right)
}

isSymmetric()
