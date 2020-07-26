/*
const trailingZeroes = (n) => {
  let num = BigInt(1)
  for (let i = BigInt(1); i <= n; i++) num *= i
  const arr = (num + '').split('').reverse()
  let c = 0
  for (let i = 0; i < arr.length; i++) {
    if (+arr[i] !== 0) break
    c++
  }
  return c
}
*/

const trailingZeroes = (n) => {
  let count = 0
  while (n >= 5) {
    n = Math.floor(n / 5)
    count += n
  }
  return count
}

console.log(trailingZeroes(7371))
