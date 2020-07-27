const isSubsequence = (s, t) => {
  if (!s) return true
  let tStr = t
  let tempStr = ''
  for (let i = 0; i < s.length; i++) {
    const idx = tStr.indexOf(s[i])
    if (idx > -1) {
      tStr = tStr.substring(idx)
      tempStr += tStr.substring(0, 1)
      tStr = tStr.substring(1)
    } else {
      return false
    }
  }
  return tempStr === s
}

console.log(isSubsequence('abc', 'ahbgdc'))
