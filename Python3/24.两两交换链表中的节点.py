#
# @lc app=leetcode.cn id=24 lang=python3
#
# [24] 两两交换链表中的节点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
我也不知道怎么样的
Accepted
55/55 cases passed (28 ms)
Your runtime beats 88.65 % of python3 submissions
Your memory usage beats 5.43 % of python3 submissions (15.1 MB)
"""
class Solution:
    def swapPairs(self, head: ListNode) -> ListNode:
        h = ListNode(None)
        prev, prev.next = h, head
        while prev.next and prev.next.next:
            n1 = prev.next
            n2 = n1.next
            prev.next, n2.next, n1.next = n2, n1, n2.next
            prev = n1
        return h.next

# @lc code=end
