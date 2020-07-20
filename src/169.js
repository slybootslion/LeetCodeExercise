const majorityElement = (nums) => {
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
  }
  let temp = 0
  let tempKey = 0
  for (const key in obj) {
    if (obj[key] > temp) {
      temp = obj[key]
      tempKey = key
    }
  }
  return tempKey
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))
