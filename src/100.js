/* const isSameTree = (p, q) => {
  let res = true
  const rec = (p, q) => {
    if (!res) return false
    if ((!p && q) || (p && !q)) {
      res = false
      return
    }
    if (!p || !q) return false
    res = p.val === q.val
    rec(p.left, q.left)
    rec(p.right, q.right)
  }
  rec(p, q)
  return res
} */

const isSameTree = (p, q) => {
  if (!p && !q) return true
  if (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) return true
  return false
}

isSameTree()
