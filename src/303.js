class NumArray {
  constructor (nums) {
    this.nums = nums
  }

  sumRange (i, j) {
    let sum = 0
    for (let idx = i; idx <= j; idx++) {
      sum += this.nums[idx]
    }
    return sum
  }
}

const obj = new NumArray([-2, 0, 3, -5, 2, -1])
const param1 = obj.sumRange(0, 5)
console.log(param1)
