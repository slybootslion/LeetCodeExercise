const rob = (nums) => {
  if (!nums) return 0
  let p1 = 0
  let p2 = nums[0]
  for (let i = 2; i <= nums.length; i++) {
    const temp = Math.max(p1 + nums[i - 1], p2)
    p1 = p2
    p2 = temp
  }
  return p2
}

console.log(rob([2, 7, 9, 3, 1]))
