#
# @lc app=leetcode.cn id=19 lang=python3
#
# [19] 删除链表的倒数第 N 个结点
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

"""
用一个栈来计数
"""

""" 
class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        d = ListNode(0, head)
        stack = []
        p = d
        while p:
            stack.append(p)
            p = p.next
        stack[-n - 1].next = stack[-n - 1].next.next
        return d.next
"""

""" 
快慢双指针
Accepted
208/208 cases passed (32 ms)
Your runtime beats 72.98 % of python3 submissions
Your memory usage beats 5.01 % of python3 submissions (15.2 MB)
"""


class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        p1 = d = ListNode(head.val, head)
        p2 = head

        while n:
            p2 = p2.next
            n -= 1

        while p2:
            p1 = p1.next
            p2 = p2.next

        p1.next = p1.next.next
        return d.next

# @lc code=end
