/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*
方法一：调用数组api截取拼接
因为这个题会无视返回的数据（额外的空间），所以要遍历一遍，把拼接后的数组的值填回原数组中。
同时要考虑k大于数组长度的情况，也比较简单，取余就行
*/
/* 
Accepted
37/37 cases passed (92 ms)
Your runtime beats 99.26 % of javascript submissions
Your memory usage beats 69.85 % of javascript submissions (46.7 MB)
*/
/* 
var rotate = function(nums, k) {
  if (k === 0) return nums
  const len = nums.length
  if (len < k) k = k % len
  const arr1 = nums.slice(len - k)
  const arr2 = nums.slice(0, len - k)
  const arr = [...arr1, ...arr2]
  for (let i = 0; i < arr.length ; i++) {
    const num = arr[i]
    nums[i] = num
  }
};
*/

/* 
方法二：奇技淫巧
nums = "----->-->"; k =3
result = "-->----->";
reverse "----->-->" we can get "<--<-----"
reverse "<--" we can get "--><-----"
reverse "<-----" we can get "-->----->"
this visualization help me figure it out :)
*/
/* 
const rotate = (nums, k) => {
  const reverse = (arr, start, end) => {
    while(start < end) {
      const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
    }
  }
  const len = nums.length
  if (k > len) k = k % len
  reverse(nums, 0, len - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, len - 1)
}
*/

/* 
方法三：循环补位
*/
/* 
const rotate = (nums, k) => {
  if (k === 0) return nums
  let len = nums.length, i = len
  k = k % len
  if (k === 0) return
  while (i--) {
    nums[i + k] = nums[i]
    if (i <= k) nums[i] = nums[len + i]
  }
  nums.length = len
} 
*/

/* 
方法四：api调用
*/
/* 
Accepted
37/37 cases passed (96 ms)
Your runtime beats 98.59 % of javascript submissions
Your memory usage beats 40.19 % of javascript submissions (48.4 MB) 
*/
const rotate = (nums, k) => nums.splice(0, 0, ...nums.splice(-(k = k % nums.length), k))

/*
附一个JavaScript的偷懒写法
以前可以用，不过现在的测试用例过不了了，会超时
*/
/*
const rotate = (nums, k) => {
  if (k === 0) return nums
  for (let i = 0; i < k; i++) {
    const n = nums.pop()
    nums.unshift(n)
  }
}
*/

// @lc code=end

