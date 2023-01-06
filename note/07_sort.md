# 排序

### 冒泡排序（Bubble Sort）

```js
function bubbleSort (arr) {
  if (arr.length <= 1) return;
  for (let i = 0; i < arr.length; i++) {
    let flag = false; // 提前退出冒泡循环的标志位
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) { // 交换逻辑
        const temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
        flag = true; // 表示有数据交换
      }
    }
    if (!flag) break; // 表示没有数据交换，提前退出
  }
}
```

冒泡排序是最基本的排序，属于原地排序算法，空间复杂度为O1，是一种稳定的排序算法，相同数据排序前后不会改变顺序，时间复杂度最坏的情况下是O(n^2);

### 插入排序（Insertion Sort）

```js

```
