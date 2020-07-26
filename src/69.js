const mySqrt = (x) => {
  let low = 0
  let high = x
  let mid = 0
  while (low <= high) {
    mid = Math.ceil((low + high) / 2)
    const res = Math.pow(mid, 2)
    if (res === x) return mid
    if (res < x) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return Math.floor(high)
}

console.log(mySqrt(8))
