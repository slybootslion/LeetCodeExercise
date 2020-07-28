const isPalindrome = (head) => {
  let p = head
  const arr = []
  while (p) {
    arr.push(p.val)
    p = p.next
  }

  const reArr = arr.reverse()
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== reArr[reArr.length - 1 - i]) return false
  }
  return true
}

console.log(isPalindrome())
