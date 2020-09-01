/* const exchange = (nums) => {
  const len = nums.length
  for (let i = 0; i < len; i++) {
    const item = nums[i]
    if (item % 2 === 1) {
      nums.unshift(nums.splice(i, 1)[0])
    }
  }
  return nums
} */

const exchange = (nums) => {
  const len = nums.length
  const oddArr = []
  const evenArr = []

  for (let i = 0; i < len; i++) {
    const item = nums[i]
    item % 2 === 1 ? oddArr.push(item) : evenArr.push(item)
  }

  return [...oddArr, ...evenArr]
}

console.log(exchange([1, 2, 3, 4]))
