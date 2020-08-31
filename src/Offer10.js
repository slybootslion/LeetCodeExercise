/*
const fib = (n) => {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fib(n - 1) + fib(n - 2)
}
*/

const fib = (n) => {
  if (n < 1) return 0
  if (n <= 2) return 1
  const arr = [0n, 1n, 1n]
  let num = 2n
  for (let i = 2; i < n; i++) {
    arr.push(num)
    num = num + arr[i]
  }
  return arr.pop() % 1000000007n
}

console.log(fib(10))
