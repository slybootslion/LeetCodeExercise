const lengthOfLongestSubstring = (s) => {
  let l = 0 // 左指针
  let maxLength = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) { // r是右指针
    if (map.has(s[r]) && map.get(s[r]) >= l) l = map.get(s[r]) + 1
    maxLength = Math.max(maxLength, r - l + 1) // 右指针移动过程中对比最大长度
    map.set(s[r], r)
  }
  return maxLength
}

console.log(lengthOfLongestSubstring())
