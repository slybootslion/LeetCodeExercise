#
# @lc app=leetcode.cn id=92 lang=python3
#
# [92] 反转链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
呸
Accepted
44/44 cases passed (24 ms)
Your runtime beats 96.97 % of python3 submissions
Your memory usage beats 16.72 % of python3 submissions (15.2 MB)
"""


class Solution:
    def reverseBetween(self, head: ListNode, left: int, right: int) -> ListNode:
        dummy = ListNode(val=None, next=head)
        p = dummy
        for i in range(left - 1):
            p = p.next
        right_node = p
        for i in range(right - left + 1):
            right_node = right_node.next
        left_node, curr, p.next, right_node.next = p.next, right_node.next, None, None
        _link = self.reverseList(left_node)
        p.next = right_node
        left_node.next = curr
        return dummy.next

    def reverseList(self, head: ListNode) -> ListNode:
        p1 = head
        p2 = None
        while p1:
            p1.next, p2, p1 = p2, p1, p1.next
        return p2
# @lc code=end
