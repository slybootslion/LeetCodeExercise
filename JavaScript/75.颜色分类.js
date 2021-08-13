/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/* 
方法一：无耻调用api大法好
*/
/* 
Accepted
87/87 cases passed (64 ms)
Your runtime beats 96.13 % of javascript submissions
Your memory usage beats 36.17 % of javascript submissions (38.1 MB)
*/
// const sortColors = nums => nums.sort((a, b) => a - b)
// 方法二：实现原地快排
/* 
Accepted
87/87 cases passed (72 ms)
Your runtime beats 79.88 % of javascript submissions
Your memory usage beats 48.46 % of javascript submissions (38 MB)
*/
function quickSort(arr, left, right) {
  let len = arr.length;
  left = left !== undefined ? left : 0;
  right = right !== undefined ? right : len - 1;
  // 递归，终止条件是left>=right
  if (left < right) {
    let index = sortAndFindIndex(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index + 1, right)
  }
  return arr
}
// 小于基准点的放在前面，大于基准点的放在后面，并获取基准点的索引
function sortAndFindIndex(arr, left, right) {
  // 获取当前基准点索引对应的值
  const baseValue = arr[left];
  let index = left + 1;
  for (let i = index; i <= right; i++) {
    if (baseValue > arr[i]) {
      swap(arr, index, i)
      index++
    }
  }
  // -1是因为最后依次符合条件的i加1了
  swap(arr, index - 1, left);
  return index - 1
}
function swap(arr, i, j) {
  let temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

const sortColors = nums => quickSort(nums)
// 方法三：原地插排
/* 
Accepted
87/87 cases passed (68 ms)
Your runtime beats 89.63 % of javascript submissions
Your memory usage beats 7.08 % of javascript submissions (39.2 MB)
*/
/* 
const insertSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let index = i
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) index = j
    }
    arr.splice(index, 0, arr[i])
    arr.splice(i + 1, 1)
  }
  return arr
}
const sortColors = nums => insertSort(nums)
*/

// @lc code=end

