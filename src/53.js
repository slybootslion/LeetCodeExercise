const maxSubArray = (nums) => {
  if (nums.length === 1) return Number(nums)
  let sum = 0
  let max = nums[0]
  for (let i = 0; i < nums.length; i++) {
    const s = sum + nums[i]
    sum = s > nums[i] ? s : nums[i]
    max = Math.max(max, sum)
  }
  return max
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
