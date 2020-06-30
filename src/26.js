/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  if (nums.length < 2) return nums.length
  let temp = nums[0]
  for (let i = 1; i < nums.length;) {
    if (nums[i] === temp) nums.splice(i, 1)
    else temp = nums[i++]
  }
  return nums.length
}
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))
