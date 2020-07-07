var guess = function (num) {
}

const guessNumber = (n) => {
  let low = 1
  let high = n
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const res = guess(mid)
    if (res === 1) low = mid + 1
    else if (res === -1) high = mid - 1
    else return mid
  }
}

guessNumber()
