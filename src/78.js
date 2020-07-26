const subsets = (nums) => {
  const res = []
  const rec = (arr, len, idx) => {
    if (arr.length === len) {
      res.push(arr)
      return false
    }
    for (let i = idx; i < nums.length; i++) rec(arr.concat(nums[i]), len, i + 1)
  }
  for (let i = 0; i <= nums.length; i++) {
    rec([], i, 0)
  }
  return res
}

console.log(subsets([1, 2, 3]))
