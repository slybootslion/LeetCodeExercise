const hammingWeight = (n) => {
  return n.toString().replace(/0/g, '').length
}

console.log(hammingWeight('11111111111111111111111111111101'))
