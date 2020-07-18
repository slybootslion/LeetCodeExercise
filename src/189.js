const rotate = (nums, k) => {
  if (!nums.length || !k) return nums
  for (let i = 0; i < k; i++) {
    const n = nums.pop()
    nums.unshift(n)
  }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3))
