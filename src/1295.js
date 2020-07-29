const findNumbers = (nums) => {
  let c = 0
  nums.forEach(item => {
    item = item + ''
    if (item.length % 2 === 0) c++
  })
  return c
}

console.log(findNumbers([12, 345, 2, 6, 7896]))
