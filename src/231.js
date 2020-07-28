const isPowerOfTwo = (n) => {
  let i = 0
  while (i >= 0) {
    const res = Math.pow(2, i)
    if (res > n) return false
    if (Math.pow(2, i) === n) return true
    i++
  }
}

console.log(isPowerOfTwo(16))
