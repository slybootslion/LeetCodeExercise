const countAndSay = (n) => {
  let a = '1'
  while (--n > 0) {
    let temp = ''
    let c = 1
    for (let i = 0; i < a.length; i++) {
      if (a[i] === a[i + 1]) c = c + 1
      else {
        temp += c + a[i]
        c = 1
      }
    }
    a = temp
  }
  return a
}

console.log(countAndSay(1))
