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
    if (this.size() === 1) return this.heap.shift()
    const top = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.shiftDown(0)
    return top
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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode (val) {
  this.val = val
  this.next = null
}

const mergeKLists = (lists) => {
  const listNode = new ListNode(0)
  const minHeap = new MinHeap()
  let p = ListNode
  lists.forEach(item => {
    if (item) minHeap.set(item)
  })
  while (minHeap.size()) {
    const top = minHeap.pop()
    p.next = top
    p = p.next
    if (top.next) minHeap.set(top.next)
  }
  return listNode.next
}

mergeKLists()
