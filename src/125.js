const isPalindrome = (s) => {
  if (!s) return true
  const reg = /[\W|_]/g
  const res = s.replace(reg, '').toLowerCase()
  console.log(res)
  const reverseRes = res.split('').reverse().join('')
  return res === reverseRes
}
console.log(isPalindrome('ab_a'))
