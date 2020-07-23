const containsDuplicate = (nums) => {
  const set = new Set()
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) return true
    else set.add(nums[i])
  }
  return !(set.size === nums.length)
}

console.log(containsDuplicate([1, 2, 3, 4]))
