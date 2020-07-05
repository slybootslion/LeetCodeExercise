const mostCommonWord = (paragraph, banned) => {
  const reg = /[!?',;.\s]/g
  const arr = paragraph.toLowerCase().replace(reg, ' ').split(' ')
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i]) continue
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1)
    } else {
      if (!banned.includes(arr[i])) {
        map.set(arr[i], 1)
      }
    }
  }
  const arrayObj = Array.from(map)
  arrayObj.sort((a, b) => b[1] - a[1])
  return arrayObj[0][0]
}

const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'
const banned = ['hit']
// const paragraph = 'a, a, a, a, b,b,b,c, c'
// const banned = ['a']
console.log(mostCommonWord(paragraph, banned))
