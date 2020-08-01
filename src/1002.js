const arrCheck = (str, A) => {
  const minLen = A.length - 1
  let c = 0
  for (let i = 1; i < A.length; i++) {
    let item = A[i]
    const idx = item.indexOf(str)
    if (idx > -1) {
      item = item.replace(str, '')
      c++
    }
    A[i] = item
  }
  if (c === minLen) return str
}

const commonChars = (A) => {
  const temp = A[0]
  const res = []
  for (let i = 0; i < temp.length; i++) {
    const r = arrCheck(temp[i], A)
    if (r) res.push(r)
  }
  return res
}

console.log(commonChars(['bella', 'label', 'roller']))
