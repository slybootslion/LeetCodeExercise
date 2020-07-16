const findContentChildren = (g, s) => {
  const sortFunc = (a, b) => a - b
  g.sort(sortFunc)
  s.sort(sortFunc)
  let idx = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[idx]) idx++
  }
  return idx
}

console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]))
