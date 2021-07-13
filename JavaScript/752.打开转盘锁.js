/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/* 
思路：
将每拨动的一步放入队列，每走一步计数一次，然后计算下一步可能出现的情况，跟target比对，如果有，返回当前计数的步数，如果遍历到最后没有就返回-1。

get是工具函数，用来生成当前数之后下一步可能出现的情况。
prev和next是当前数，上一步和下一步的工具函数。
*/
/* 
Accepted
48/48 cases passed (392 ms)
Your runtime beats 49.69 % of javascript submissions
Your memory usage beats 75.87 % of javascript submissions (48.7 MB)
*/
const prev = num => num === '0' ? '9' : (parseInt(num) - 1).toString()

const next = num => num === '9' ? '0' : (parseInt(num) + 1).toString()

const get = numStr => {
  const res = []
  const arr = numStr.split('')
  for (let i = 0; i < 4; i++) {
    const num = arr[i]
    arr[i] = prev(num)
    res.push(arr.join(''))
    arr[i] = next(num)
    res.push(arr.join(''))
    arr[i] = num
  }
  return res
}

const openLock = (deadends, target) => {
  if (deadends.includes('0000')) return -1
  if (target === '0000') return 0

  const queue = ['0000']
  const set = new Set()
  set.add('0000')
  let count = 0

  while (queue.length) {
    ++count
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const numStr = queue.shift()
      const nextSteps = get(numStr)
      for (const step of nextSteps) {
        if (!set.has(step) && !deadends.includes(step)) {
          if (step === target) return count
          set.add(step)
          queue.push(step)
        }
      }
    }
  }
  return -1
}
// @lc code=end

