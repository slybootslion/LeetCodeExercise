const reverseBits = (n) => {
  const nArr = n.toString(2).split('')
  while (nArr.length < 32) {
    nArr.unshift('0')
  }
  return parseInt(nArr.reverse().join(''), 2)
}

console.log(reverseBits('00000010100101000001111010011100'))
