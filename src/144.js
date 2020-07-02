// 方法一：递归
/*
const preorderTraversal = (root) => {
  const arr = []
  const dfs = (tree) => {
    if (!tree) return false
    arr.push(tree.val)
    dfs(tree.left)
    dfs(tree.right)
  }
  dfs(root)
  return arr
}
*/

// 方法二：栈
const preorderTraversal = (root) => {
  const arr = []
  const stack = []
  if (root) stack.push(root)
  while (stack.length) {
    const node = stack.pop()
    arr.push(node.val)
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return arr
}

preorderTraversal()
