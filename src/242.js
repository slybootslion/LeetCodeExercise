const isAnagram = (s, t) => {
  if (s.length !== t.length) return false
  let tStr = t
  for (let i = 0; i < s.length; i++) {
    const idx = tStr.indexOf(s[i])
    if (idx < 0) return false
    else tStr = tStr.replace(s[i], '')
  }
  return true
}

console.log(isAnagram('aacc', 'ccac'))
