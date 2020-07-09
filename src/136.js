const singleNumber = (nums) => {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  }
  return Array.from(set)[0]
}

console.log(singleNumber([2, 2, 1]))
