const printNumbers = (n) => {
  let s = ''
  for (let i = 0; i < n; i++) {
    s += 9
  }
  const arr = []
  for (let i = 0; i < +s; i++) {
    arr.push(i + 1)
  }
  return arr
}

// var printNumbers = function(n) {
//   return Array.from({length:10**n -1 },(item, index) => index+1)
// }

console.log(printNumbers(4))
