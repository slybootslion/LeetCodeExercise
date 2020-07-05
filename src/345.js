// 'a','e','i','o','u','A','E','I','O','U'
const reverseVowels = (s) => {
  const arr = []
  const set = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const strReverse = s.split('').reverse()
  strReverse.forEach(item => {
    if (set.includes(item)) arr.push(item)
  })
  const tempArr = s.split('')
  for (let i = 0; i < tempArr.length; i++) {
    if (set.includes(tempArr[i])) {
      const sItem = arr.shift()
      tempArr.splice(i, 1, sItem)
    }
    if (!arr.length) break
  }
  return tempArr.join('')
}

reverseVowels('hello')
