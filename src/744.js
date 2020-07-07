const nextGreatestLetter = (letters, target) => {
  let len = letters.length
  if (!letters.includes(target)) {
    letters.unshift(target)
    letters.sort()
    len = letters.length
  } else {
    const idx = letters.lastIndexOf(target)
    if (idx < len - 1 && letters[idx + 1] !== target) return letters[idx + 1]
  }
  if (letters[len - 1] <= target) return letters[0]
  let low = 1
  let high = len - 1
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    if (letters[mid] < target) low = mid + 1
    else if (letters[mid] > target) high = mid - 1
    else return letters[mid + 1]
  }
  return letters[1]
}

console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'))
