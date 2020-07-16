const levelOrderBottom = (root) => {
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
  return res.reverse()
}

levelOrderBottom()
