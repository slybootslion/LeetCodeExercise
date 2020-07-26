const containsNearbyDuplicate = (nums, k) => {
  const len = nums.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] === nums[j] && Math.abs(j - i) <= k) return true
    }
  }

  return false
}

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))
