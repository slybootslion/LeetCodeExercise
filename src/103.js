const zigzagLevelOrder = (root) => {
  if (!root) return []
  const arr = [root]
  const res = []
  let s = true
  while (arr.length) {
    let len = arr.length
    const temp = []
    if (s) {
      while (len--) {
        const node = arr.shift()
        temp.push(node.val)
        if (node.left) arr.push(node.left)
        if (node.right) arr.push(node.right)
      }
      res.push(temp)
    } else {
      while (len--) {
        const node = arr.pop()
        temp.push(node.val)
        if (node.right) arr.unshift(node.right)
        if (node.left) arr.unshift(node.left)
      }
      res.push(temp)
    }
    s = !s
  }
  return res
}

zigzagLevelOrder()
