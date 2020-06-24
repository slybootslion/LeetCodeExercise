/*
"ADOBECODEBANC"
"ABC"
* */
const minWindow = (s, t) => {
  let l = 0
  let r = 0
  const need = new Map()
  for (const c of t) need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  let needType = need.size
  let res = ''
  while (r < s.length) {
    const sItem = s[r]
    if (need.has(sItem)) {
      need.set(sItem, need.get(sItem) - 1)
      if (need.get(sItem) === 0) needType -= 1
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1)
      console.log(newRes)
      if (!res || newRes.length < res.length) res = newRes
      const sItem2 = s[l]
      if (need.has(sItem2)) {
        need.set(sItem2, need.get(sItem2) + 1)
        if (need.get(sItem2) === 1) needType += 1
      }
      l += 1
    }
    r += 1
  }
  return res
}

console.log(minWindow('ADOBECODEBANC', 'ABC'))
