var guess = function (num) {
}

const guessNumber = (n) => {
  const rec = (low, high) => {
    if (low > high) return
    const mid = Math.floor((low + high) / 2)
    const res = guess(mid)
    if (res === 1) {
      return rec(mid + 1, high)
    } else if (res === -1) {
      return rec(1, mid - 1)
    } else {
      return mid
    }
  }
  return rec(1, n)
}

/* const guessNumber = (n) => {
  let low = 1
  let high = n
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const res = guess(mid)
    if (res === 1) low = mid + 1
    else if (res === -1) high = mid - 1
    else return mid
  }
} */

guessNumber()
