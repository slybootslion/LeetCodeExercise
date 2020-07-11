const dpFunc = (arr) => {
  const len = arr.length
  let p1 = 0
  let p2 = arr[0]
  for (let i = 1; i < len; i++) {
    const temp = Math.max(p1 + arr[i], p2)
    p1 = p2
    p2 = temp
  }
  return p2
}

const rob = (nums) => {
  const len = nums.length
  if (!len) return 0
  if (len === 1) return nums[0]
  const tempArr1 = nums.slice(1)
  const tempArr2 = nums.slice(0, nums.length - 1)
  const res1 = dpFunc(tempArr1)
  const res2 = dpFunc(tempArr2)
  return Math.max(res1, res2)
}

console.log(rob([2, 1, 1, 2, 2, 3]))
console.log(rob([2, 3, 2]))
console.log(rob([0]))
