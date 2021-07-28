#
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] 两数相加
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
  def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
    dummy = current = ListNode()
    c = 0
    while l1 or l2:
      x = l1.val if l1 else 0
      y = l2.val if l2 else 0
      sum = x + y + c
      current.next = ListNode(sum % 10)
      current = current.next
      c = sum // 10
      if l1: l1 = l1.next
      if l2: l2 = l2.next
    if c: current.next = ListNode(c)
    return dummy.next
# @lc code=end

