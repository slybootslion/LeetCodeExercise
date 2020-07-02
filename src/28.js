const strStr = (haystack, needle) => {
  if (!needle) return 0
  let idx = 0
  const findIndex = (index) => {
    idx = haystack.indexOf(needle[0], index)
    if (idx < 0) idx = -1
    const str = haystack.slice(idx, idx + needle.length)
    if (str.length < needle.length) {
      idx = -1
      return idx
    }
    if (str === needle) return idx
    else findIndex(idx + 1)
  }
  findIndex(idx)
  return idx
}

strStr()
