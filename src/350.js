const intersect = (nums1, nums2) => {
  const long = nums1.length > nums2.length ? nums1 : nums2
  const short = nums1.length > nums2.length ? nums2 : nums1

  const arr = []

  for (let i = 0; i < short.length; i++) {
    const idx = long.findIndex(item => item === short[i])
    if (idx > -1) {
      arr.push(short[i])
      long.splice(idx, 1)
    }
  }
  return arr
}

console.log(intersect([1, 2, 2, 1], [2, 2]))
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]))
console.log(intersect([3, 1, 2], [1, 1]))
