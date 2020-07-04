const f = (str) => {
  if (str.length === 1) return 1
  const strArr = str.split('').sort((a, b) => a.localeCompare(b))
  let tempStr = strArr[0]
  for (let i = 1; i < strArr.length; i++) {
    if (strArr[0] === strArr[i]) tempStr += strArr[i]
    else break
  }
  return tempStr.length
}

const numSmallerByFrequency = (queries, words) => {
  const qArr = []
  queries.forEach(str => {
    const len = f(str.trim())
    qArr.push(len)
  })

  let W = []
  words.forEach(str => {
    const len = f(str.trim())
    W.push(len)
  })

  W = W.sort()

  const tempArr = []
  for (let i = 0; i < qArr.length; i++) {
    let c = 0
    for (let j = 0; j < W.length; j++) {
      if (qArr[i] < W[j]) {
        c++
      }
    }
    tempArr.push(c)
  }
  return tempArr
}

numSmallerByFrequency(['cbd'], ['zaaaz'])
