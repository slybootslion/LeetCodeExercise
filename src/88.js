// 放leetcode中会报错
// const merge = (nums1, m, nums2, n) => {
//   return nums1.splice(0, m).concat(nums2).sort((a, b) => a - b)
// }

const merge = (nums1, m, nums2, n) => {
  nums2.forEach(item => {
    nums1.splice(m, 1, item)
    m++
  })
  return nums1.sort((a, b) => a - b)
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))
