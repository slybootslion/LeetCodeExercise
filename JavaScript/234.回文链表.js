/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
/* 
方法一：
偷懒的做法，用一个额外的数组来放链表中的值，然后判断是否回文数组
*/
/* 
Accepted
85/85 cases passed (264 ms)
Your runtime beats 25.87 % of javascript submissions
Your memory usage beats 46.38 % of javascript submissions (64.4 MB)
*/
var isPalindrome = function (head) {
  let p = head
  const arr = []
  while (p) {
    arr.push(p.val)
    p = p.next
  }

  const reArr = arr.reverse()
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    if (arr[i] !== reArr[reArr.length - 1 - i]) return false
  }
  return true
};
// @lc code=end

