const uniqueOccurrences = (arr) => {
  const len = arr.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const item = arr[i]
    if (map.has(item)) {
      const count = map.get(item) + 1
      map.set(item, count)
    } else {
      map.set(item, 1)
    }
  }
  const set = new Set()
  map.forEach(val => set.add(val))

  return set.size === map.size
}

console.log(uniqueOccurrences([1, 2]))
