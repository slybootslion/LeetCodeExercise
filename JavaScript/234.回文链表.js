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
/* 
const isPalindrome = head => {
  const arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  for (let i = 0; i < parseInt(arr.length / 2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) return false
  }
  return true
}
 */

/* 
方法二：反转链表再比对
是的，你没有看错leetcode可以用lodash。不让用就自己写个深拷贝
这种方法性能感人
*/
/* 
Accepted
85/85 cases passed (3240 ms)
Your runtime beats 5 % of javascript submissions
Your memory usage beats 5.05 % of javascript submissions (97.4 MB)
*/
/* 
const isPalindrome = head => {
  const origin = _.cloneDeep(head)
  const revers = head => {
    let p = head
    let l = null
    while (p) {
      let temp = p.next
      p.next = l
      l = p
      p = temp
    }
    return l
  }
  const reLink = revers(head)
  let p = origin
  let l = reLink
  while (l && p) {
    console.log(l.val, p.val)
    if (l.val !== p.val) return false
    l = l.next
    p = p.next
  }
  return true
}
*/

/* 
方法三：倒序遍历
贴个伪代码，关于遍历顺序的写法（递归版）：
二叉树↓
void traverse(TreeNode root) {
    前序遍历代码
    traverse(root.left);
    中序遍历代码
    traverse(root.right);
    后序遍历代码
}
链表↓
void traverse(ListNode head) {
    前序遍历代码
    traverse(head.next);
    后序遍历代码
}
*/
/* 
Accepted
85/85 cases passed (248 ms)
Your runtime beats 35.52 % of javascript submissions
Your memory usage beats 5.05 % of javascript submissions (71.8 MB)
*/

const isPalindrome = head => {
  let left = head
  const traverse = right => {
    if (!right) return true
    let res = traverse(right.next)
    res = (res && right.val === left.val)
    left = left.next
    return res
  }
  return traverse(head)
}
// @lc code=end

