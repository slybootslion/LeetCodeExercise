/*
const reverseString = (s) => {
  return s.reverse()
}
*/

const reverseString = (s) => {
  const len = Math.floor(s.length / 2)
  for (let i = 0; i < len; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }
}

reverseString(['H', 'a', 'n', 'n', 'a', 'h'])
