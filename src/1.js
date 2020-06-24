const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    const num2 = target - num
    if (map.has(num2)) return [map.get(num2), i] // get到的就是曾经存储的
    else map.set(num, i)
  }
}

console.log(twoSum())
