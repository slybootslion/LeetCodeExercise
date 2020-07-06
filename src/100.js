const isSameTree = (p, q) => {
  let res
  const rec = (p, q) => {
    if (Object.prototype.toString.call(res) === '[object Boolean]' && !res) return false
    if ((!p && q) || (p && !q)) {
      res = false
      return
    }
    if (!p && !q) return false
    res = p.val === q.val
    rec(p.left, q.left)
    rec(p.right, q.right)
  }
  rec(p, q)
  return res
}

isSameTree()
