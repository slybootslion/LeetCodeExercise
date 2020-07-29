const getDecimalValue = (head) => {
  let s = ''
  while (head) {
    s += head.val
    head = head.next
  }
  return parseInt(s, 2)
}

console.log(getDecimalValue())
