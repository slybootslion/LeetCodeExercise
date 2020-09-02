const isSameTree = (tree1, tree2) => {
  if (!tree2) return true
  if (!tree1) return false
  if (tree1.val !== tree2.val) return false
  return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
}

const isSubStructure = (A, B) => {
  if (!A || !B) return false
  return isSameTree(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}

console.log(isSubStructure())
