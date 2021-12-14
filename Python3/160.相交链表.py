#
# @lc app=leetcode.cn id=160 lang=python3
#
# [160] 相交链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None
"""
用双指针将两个长度可能会不相同的链表，链接成一条，这样遍历到头的时候，就是两个链表相交的点（或者没有相交的点）。
Accepted
39/39 cases passed (136 ms)
Your runtime beats 59.54 % of python3 submissions
Your memory usage beats 49.66 % of python3 submissions (29.6 MB)
"""

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        p1, p2 = headA, headB

        while p1 != p2:
            p1 = headB if not p1 else p1.next
            p2 = headA if not p2 else p2.next

        return p1

# @lc code=end
