const subtractProductAndSum = (n) => {
  const product = (n + '').split('').reduce((a, b) => +a * +b)
  const sum = (n + '').split('').reduce((a, b) => +a + +b)
  return product - sum
}

console.log(subtractProductAndSum(234))
