const isBalanced = (root) => {
  let check = true

  const checkLevel = (root) => {
    if (!root) return 0
    const l = checkLevel(root.left)
    const r = checkLevel(root.right)
    if (!check) return false
    if (Math.abs(l - r) > 1) check = false
    return Math.max(l, r) + 1
  }

  if (!root) return check
  checkLevel(root)
  return check
}

isBalanced()
