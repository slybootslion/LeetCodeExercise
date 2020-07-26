const isIsomorphic = (s, t) => {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      if (map.get(s[i]) !== t[i]) return false
    } else {
      map.set(s[i], t[i])
    }
  }
  map.clear()
  for (let i = 0; i < t.length; i++) {
    if (map.has(t[i])) {
      if (map.get(t[i]) !== s[i]) return false
    } else {
      map.set(t[i], s[i])
    }
  }
  return true
}

console.log(isIsomorphic('ab', 'aa'))
console.log(isIsomorphic('ab', 'ca'))
