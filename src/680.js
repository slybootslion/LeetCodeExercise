/*
真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
* */

// 工具类，判断是否回文字符串
const isPalindrome = (str) => {
  return str === str.split('').reverse().join('')
}

const validPalindrome = (s) => {
  const len = s.length
  // 双指针
  let l = 0
  let r = len - 1

  while (l < r && s[l] === s[r]) {
    l++
    r--
  }

  if (isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r))) {
    return true
  }

  return false
}

console.log(validPalindrome('aba'))
