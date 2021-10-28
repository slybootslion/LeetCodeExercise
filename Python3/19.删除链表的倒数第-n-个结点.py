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
"""


class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        d = ListNode(0, head)
        fast, slow = head, d
        
        while n:
            fast = fast.next
            n -= 1
            
        while fast:
            fast = fast.next
            slow = slow.next
            
        slow.next = slow.next.next
        
        return d.next

# @lc code=end
