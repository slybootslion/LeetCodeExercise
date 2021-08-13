/*
 * @lc app=leetcode.cn id=706 lang=javascript
 *
 * [706] 设计哈希映射
 */

// @lc code=start
/* 
当想清楚怎么弄一个第一无二的key之后，就显得毫无难度了
*/
/* 
Accepted
36/36 cases passed (196 ms)
Your runtime beats 79.18 % of javascript submissions
Your memory usage beats 23.89 % of javascript submissions (48.2 MB)
*/
class MyHashMap {
  constructor() {
    this.PRIME_NUN = 977
    this.data = new Array(this.PRIME_NUN).fill(null).map(() => new Array())
  }

  hash(key) {
    return key % this.PRIME_NUN
  }

  put(key, value) {
    const h = this.hash(key)
    for (const it of this.data[h]) {
      if (it[0] === key) {
        it[1] = value
        return
      }
    }
    this.data[h].push([key, value])
  }

  get(key) {
    const h = this.hash(key)
    for (const it of this.data[h]) {
      if (it[0] === key) return it[1]
    }
    return -1
  }

  remove(key) {
    const h = this.hash(key)
    for (const it of this.data[h]) {
      if (it[0] === key) {
        const idx = this.data[h].indexOf(it)
        this.data[h].splice(idx, 1)
        return
      }
    }
  }
}
// @lc code=end

