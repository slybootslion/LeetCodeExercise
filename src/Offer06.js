const reversePrint = (head) => {
  const arr = []
  if (!head) return arr

  let p = head
  while (p) {
    arr.unshift(p.val)
    p = p.next
  }
  return arr
}

console.log(reversePrint([1, 3, 2]))
