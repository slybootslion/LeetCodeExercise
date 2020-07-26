const dictStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const convertToTitle = (n) => {
  const rec = (n) => {
    if (n <= 26) return dictStr[n - 1]
    if (!(n % 26)) return rec(Math.floor(n / 26) - 1) + dictStr[26 - 1]
    return rec(Math.floor(n / 26)) + dictStr[n % 26 - 1]
  }
  return rec(n)
}

console.log(convertToTitle(703))
