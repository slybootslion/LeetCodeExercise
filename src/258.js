const addDigits = (num) => {
  if (num < 10) return num
  const sum = (n) => {
    const r = (n + '').split('').reduce((a, b) => +a + +b)
    if (r < 10) return r
    else return sum(r)
  }
  return sum(num)
}

console.log(addDigits(38))
