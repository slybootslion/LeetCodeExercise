const duplicateZeros = (arr) => {
  if (!arr.includes(0)) return null
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (item === 0) {
      const tempLastArr = arr.slice(i + 1, arr.length)
      arr[i + 1] = 0
      for (let j = 0; j < tempLastArr.length - 1; j++) {
        arr[i + 1 + j + 1] = tempLastArr[j]
      }
      i++
    }
  }
  if (arr.length > len) {
    arr.length = arr.length - 1
  }
  return arr
}

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]))
console.log(duplicateZeros([0, 0, 0, 0, 0, 0, 0]))
