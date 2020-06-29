/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = (matrix) => {
  if (!matrix || !matrix[0]) return []
  const m = matrix.length
  const n = matrix[0].length
  const flow1 = Array.from({ length: m }, () => Array.from({ length: n }, () => false))
  const flow2 = Array.from({ length: m }, () => Array.from({ length: n }, () => false))

  // 深度遍历
  const dfs = (row, col, flow) => {
    flow[row][col] = true
    // 上下左右四个点
    const arr = [[row - 1, col], [row + 1, col], [row, col - 1], [row, col + 1]]
    arr.forEach(([nextRow, nextCol]) => {
      if (
        // 矩阵范围
        nextRow >= 0 && nextRow < m &&
        nextCol >= 0 && nextCol < n &&
        // true的不递归
        !flow[nextRow][nextCol] &&
        // 判断是否符合条件
        matrix[nextRow][nextCol] >= matrix[row][col]
      ) {
        dfs(nextRow, nextCol, flow)
      }
    })
  }

  for (let row = 0; row < m; row++) {
    dfs(row, 0, flow1)
    dfs(row, n - 1, flow2)
  }
  for (let col = 0; col < n; col++) {
    dfs(0, col, flow1)
    dfs(m - 1, col, flow2)
  }

  const arr = []
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (flow1[row][col] && flow2[row][col]) arr.push([row, col])
    }
  }
  return arr
}

pacificAtlantic()
