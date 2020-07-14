const isHappy = (n) => {
  const arr = []
  const rec = (num) => {
    arr.push(num)
    const numArr = num.toString().split('')
    let sum = 0
    numArr.forEach(item => {
      sum += Math.pow(+item, 2)
    })
    if (sum === 1) return true
    else if (arr.includes(sum)) return false
    else return rec(sum)
  }
  return rec(n)
}

console.log(isHappy(20))
