const permute = (nums) => {
  const res = []
  const rec = (arr = []) => {
    if (nums.length === arr.length) {
      res.push(arr)
      return false
    }
    nums.forEach(item => {
      if (arr.includes(item)) return false
      rec(arr.concat(item))
    })
  }
  rec()
  return res
}

console.log(permute([1, 2, 3]))
