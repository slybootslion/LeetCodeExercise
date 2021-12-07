#
# @lc app=leetcode.cn id=876 lang=python3
#
# [876] 链表的中间结点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
快慢双指针
Accepted
36/36 cases passed (36 ms)
Your runtime beats 35.95 % of python3 submissions
Your memory usage beats 68.33 % of python3 submissions (14.9 MB)
"""
class Solution:
    def middleNode(self, head: ListNode) -> ListNode:
        p1 = p2 = head
        while p2 and p2.next:
            p1 = p1.next
            p2 = p2.next.next
        return p1
# @lc code=end
