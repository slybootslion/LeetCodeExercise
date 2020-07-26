const isPrime = (num) => {
  if (num <= 3) return num > 1
  else {
    const sq = Math.sqrt(num) // 开方
    for (let i = 2; i <= sq; i++) {
      if (num % i === 0) return false
    }
    return true
  }
}

const countPrimes = (n) => {
  let c = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) c++
  }
  return c
}

console.log(countPrimes(100))
