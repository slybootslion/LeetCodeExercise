const binaryTreePaths = (root) => {
  const arr = []
  const findPath = (node, str) => {
    if (!node) return false
    str += node.val
    if (!node.left && !node.right) {
      arr.push(str)
    }
    str += '->'
    findPath(node.left, str)
    findPath(node.right, str)
  }
  findPath(root, '')
  return arr
}

console.log(binaryTreePaths())
