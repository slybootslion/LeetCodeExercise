const findNumberIn2DArray = (matrix, target) => {
  const len = matrix.length
  for (let i = 0; i < len; i++) {
    if (matrix[i].includes(target)) return true
  }
  return false
}

console.log(findNumberIn2DArray([[-1, 3]], 3))
