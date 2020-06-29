/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

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
    if (this.heap[parentIndex] > this.heap[idx]) {
      this.swap(parentIndex, idx)
      this.shiftUp(parentIndex)
    }
  }

  shiftDown (idx) {
    const leftIndex = this.getLeftIndex(idx)
    const rightIndex = this.getRightIndex(idx)
    if (this.heap[leftIndex] < this.heap[idx]) {
      this.swap(leftIndex, idx)
      this.shiftDown(leftIndex)
    }

    if (this.heap[rightIndex] < this.heap[idx]) {
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

const findKthLargest = (nums, k) => {
  const minHeap = new MinHeap()
  nums.forEach(item => {
    minHeap.set(item)
    if (minHeap.size() > k) minHeap.pop()
  })
  return minHeap.peek()
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)
