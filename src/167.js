const twoSum = (numbers, target) => {
  let idx = 0
  let i = idx + 1
  while (idx < numbers.length - 1) {
    const sum = numbers[idx] + numbers[i]
    if (sum === target) return [idx + 1, i + 1]
    else {
      if (i >= numbers.length - 1) {
        idx++
        i = idx + 1
      } else i++
    }
  }
}

console.log(twoSum([5, 25, 75], 100))
