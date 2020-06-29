class MinHeap {
  constructor () {
    this.heap = []
  }

  swap (pIdx, sIdx) {
    const temp = this.heap[pIdx]
    this.heap[pIdx] = this.heap[sIdx]
    this.heap[sIdx] = temp
  }

  getParentIndex (idx) {
    return (idx - 1) >> 1 // 取余数，相当于 Math.floor((idx - 1) / 2)
  }

  getLeftIndex (idx) {
    return idx * 2 + 1
  }

  getRightIndex (idx) {
    return idx * 2 + 2
  }

  shiftUp (idx) {
    if (idx === 0) return false
    const parentIndex = this.getParentIndex(idx)
    if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[idx].val) {
      this.swap(parentIndex, idx)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown (idx) {
    const leftIndex = this.getLeftIndex(idx)
    const rightIndex = this.getRightIndex(idx)
    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[idx].val) {
      this.swap(leftIndex, idx)
      this.shiftDown(leftIndex)
    }

    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[idx].val) {
      this.swap(rightIndex, idx)
      this.shiftDown(rightIndex)
    }
  }

  set (value) {
    this.heap.push(value)
    this.shiftUp(this.heap.length - 1)
  }

  pop () {
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
  }

  // 获取堆di顶
  peek () {
    return this.heap[0]
  }

  // 堆的大小
  size () {
    return this.heap.length
  }
}
// 方法1
/* const topKFrequent = (nums, k) => {
  const map = new Map()
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })
  const arr = Array.from(map).sort((a, b) => b[1] - a[1])
  return arr.slice(0, k).map(item => item[0])
} */

// 方法2

const topKFrequent = (nums, k) => {
  const map = new Map()
  nums.forEach(num => {
    map.set(num, map.has(num) ? map.get(num) + 1 : 1)
  })
  const minHeap = new MinHeap()
  map.forEach((val, key) => {
    minHeap.set({ val, key })
    if (minHeap.size() > k) minHeap.pop()
  })
  return minHeap.heap.map(item => item.key)
}

topKFrequent([1, 1, 1, 2, 2, 3], 2)
