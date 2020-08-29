/* const findRepeatNumber = (nums) => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const item = nums[i]
    const arr = nums.slice(i + 1)
    if (arr.includes(item)) return item
  }
} */

const findRepeatNumber = (nums) => {
  const len = nums.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    const item = nums[i]
    if (map.has(item)) {
      return item
    } else {
      map.set(item, i)
    }
  }
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]))
