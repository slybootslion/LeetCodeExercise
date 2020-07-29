const minimumAbsDifference = (arr) => {
  const sortArr = arr.sort((a, b) => a - b)
  let tempArr = []
  for (let i = 1; i < sortArr.length; i++) {
    const item = sortArr[i]
    const oldItem = sortArr[i - 1]
    if (tempArr.length) {
      const n = item - oldItem
      const nTemp = tempArr[0][1] - tempArr[0][0]
      if (nTemp > n) tempArr = []
      else if (nTemp < n) continue
    }
    tempArr.push([oldItem, item])
  }
  return tempArr
}

console.log(minimumAbsDifference([4, 2, 1, 3]))
