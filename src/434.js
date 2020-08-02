const countSegments = (s) => {
  s = s.replace(/\s+/g, ' ').trim()
  if (!s) return s.length
  const arr = s.split(' ')
  return arr.length
}

console.log(countSegments('                '))
