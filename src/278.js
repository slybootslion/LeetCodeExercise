var solution = function (isBadVersion) {
  return function (n) {
    let left = 1
    let right = n
    while (left < right) {
      const mid = Math.floor((right + left) / 2)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}

const r = solution()
console.log(r(5))
