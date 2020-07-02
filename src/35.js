const searchInsert = (nums, target) => {
  if (target < nums[0]) return 0
  const len = nums.length
  if (target > nums[len - 1]) return len
  let idx
  for (let i = 0; i < len; i++) {
    if (nums[i] === target) return i
    if (nums[i] < target && nums[i + 1] > target) idx = i + 1
  }
  return idx
}

console.log(searchInsert([1, 3, 5, 6], 5))
