/* const minArray = (numbers) => {
  return numbers.sort((a, b) => a - b)[0]
} */

/* const rec = (arr) => {
  if (arr.length === 1) return arr
  const midPoint = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, midPoint)
  const rightArr = arr.slice(midPoint)
  const leftRes = rec(leftArr)
  const rightRes = rec(rightArr)
  const temp = []
  while (leftRes.length || rightRes.length) {
    if (leftRes.length && rightRes.length) temp.push(leftRes[0] > rightRes[0] ? rightRes.shift() : leftRes.shift())
    else if (leftRes.length) temp.push(leftRes.shift())
    else temp.push(rightRes.shift())
  }
  return temp
}

const minArray = (numbers) => {
  return rec(numbers).map((item, idx) => numbers[idx] = item)
} */

/* const minArray = (numbers) => {
  const len = numbers.length
  for (let i = 0; i < len; i++) {
    const item = numbers[i]
    if (item > numbers[i + 1]) {
      const r = numbers.splice(0, i + 1)
      return [...numbers, ...r][0]
    }
  }
  return numbers[0]
} */

const minArray = (numbers) => {
  const len = numbers.length
  for (let i = 0; i < len; i++) {
    const item = numbers[i]
    if (item > numbers[i + 1]) {
      return numbers[i + 1]
    }
  }
  return numbers[0]
}

const res = minArray([3, 4, 5, 1, 2])
console.log(res)
