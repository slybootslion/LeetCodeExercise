const generateTheString = (n) => {
  let isOdd = true
  if (n % 2 === 0) isOdd = false
  let str = ''
  if (isOdd) {
    for (let i = 0; i < n; i++) {
      str += 'a'
    }
  } else {
    for (let i = 0; i < n - 1; i++) {
      str += 'a'
    }
    str += 'b'
  }

  return str
}

console.log(generateTheString(1))
