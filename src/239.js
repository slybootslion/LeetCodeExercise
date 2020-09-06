/* const maxSlidingWindow = (nums, k) => {
  const len = nums.length
  let p1 = 0
  let p2 = k - 1
  const res = []
  while (p2 < len) {
    const maxNum = findMax(nums, p1, p2)
    res.push(maxNum)
    p1++
    p2++
  }
  return res
}

function findMax (arr, left, right) {
  if (!arr || !arr.length) return false
  let maxNum = arr[left]
  for (let i = left; i <= right; i++) {
    if (arr[i] > maxNum) maxNum = arr[i]
  }
  return maxNum
} */

const maxSlidingWindow = (nums, k) => {
  const len = nums.length
  const res = []
  const deque = []
  for (let i = 0; i < len; i++) {
    while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
      deque.pop()
    }
    deque.push(i)
    while (deque.length && deque[0] <= i - k) {
      deque.shift()
    }
    if (i >= k - 1) res.push(nums[deque[0]])
  }
  return res
}

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
