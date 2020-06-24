/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/*
const intersection = (nums1, nums2) => {
  const tempArr = []
  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i]) && !tempArr.includes(nums1[i])) {
      tempArr.push(nums1[i])
    }
  }
  return tempArr
}
*/

/* const intersection = (nums1, nums2) => {
  return [...new Set(nums1)].filter(item => nums2.includes(item))
}

console.log(intersection()) */

const intersection = (nums1, nums2) => {
  const map = new Map()
  nums1.forEach(item => map.set(item, true))
  const arr = []
  nums2.forEach(item => {
    if (map.get(item)) {
      arr.push(item)
      map.delete(item)
    }
  })
  return arr
}

console.log(intersection())

/* const isUnique = (astr) => {
  for (let i = 0; i < astr.length; i++) {
    for (let j = 0; j < astr.length; j++) {
      if (i === j) continue
      if (astr[i] === astr[j]) return false
    }
  }
  return true
} */

/* const isUnique = (astr) => {
  const strArr = astr.split('')
  const setArr = [...new Set(strArr)]
  return setArr.length >= strArr
} */

// console.log(isUnique('str'))
