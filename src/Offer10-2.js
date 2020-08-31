const numWays = (n) => {
  if (n < 2) return 1
  let p1 = 1n
  let p2 = 1n
  for (let i = 2; i <= n; i++) {
    const temp = p1
    p1 = p2
    p2 = temp + p1
  }
  return p2 % 1000000007n
}

console.log(numWays(11))
