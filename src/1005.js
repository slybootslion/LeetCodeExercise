const largestSumAfterKNegations = (A, K) => {
  const func = (a, b) => a - b
  let sortArr = A.sort(func)
  for (let i = 0; i < K; i++) {
    sortArr[0] = -sortArr[0]
    sortArr = sortArr.sort(func)
  }
  return sortArr.reduce((acc, cur) => acc + cur)
}

console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2))
