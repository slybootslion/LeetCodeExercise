const inorder = root => {
  if (!root) return false
  let point = root
  const stack = []
  while (stack.length || point) {
    while (point) {
      point = point.left
      stack.push(point.left)
    }
    const node = stack.pop()
    console.log(node.val)
    point = node.right
  }
}

inorder()

const postorder = root => {
  if (!root) return false
  const stack = [root]
  const outStack = []
  while (stack.length) {
    const node = stack.pop()
    outStack.push(node)
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  while (outStack.length) {
    const node = outStack.pop()
    console.log(node.val)
  }
}

postorder()
