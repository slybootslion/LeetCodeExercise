#
# @lc app=leetcode.cn id=206 lang=python3
#
# [206] 反转链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
双指针与python的骚操作
Accepted
28/28 cases passed (48 ms)
Your memory usage beats 61.16 % of python3 submissions (15.5 MB
Your runtime beats 11.49 % of python3 submissions
"""


class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev, cur = head, None
        while prev:
            prev.next, prev, cur = cur, prev.next, prev
        return cur
# @lc code=end
