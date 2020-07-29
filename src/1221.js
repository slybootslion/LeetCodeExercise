const balancedStringSplit = (s) => {
  let count = 0
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    s[i] === 'R' ? sum++ : sum--
    if (sum === 0) count++
  }
  return count
}

console.log(balancedStringSplit('LLLLRRRR'))
