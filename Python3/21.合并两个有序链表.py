#
# @lc app=leetcode.cn id=21 lang=python3
#
# [21] 合并两个有序链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
双指针
Accepted
208/208 cases passed (32 ms)
Your runtime beats 86.45 % of python3 submissions
Your memory usage beats 62.49 % of python3 submissions (15 MB)
"""
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(None)
        p = dummy
        p1, p2 = list1, list2
        while p1 and p2:
            if p1.val > p2.val:
                p.next = p2
                p2 = p2.next
            else:
                p.next = p1
                p1 = p1.next
            p = p.next
        if p1:
            p.next = p1
        if p2:
            p.next = p2

        return dummy.next
# @lc code=end
