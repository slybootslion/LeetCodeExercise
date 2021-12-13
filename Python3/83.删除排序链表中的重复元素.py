#
# @lc app=leetcode.cn id=83 lang=python3
#
# [83] 删除排序链表中的重复元素
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
"""
双指针，思路同26题
"""

"""
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        p1 = p2 = head
        while p2:
            if p1.val != p2.val:
                p1.next = p2
                p1 = p1.next
            p2 = p2.next
        p1.next = None

        return head
"""

"""
一个指针
其实这个是成绩最好的方式，而且好理解。
"""


class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        p = head
        while p and p.next:
            if p.val == p.next.val:
                p.next = p.next.next
            else:
                p = p.next
        return head


"""
递归，成绩一般般但是有一种莫名的巧妙感
"""

"""
class Solution:
    def deleteDuplicates(self, head: ListNode) -> ListNode:
        if not head or not head.next:
            return head

        curr = self.deleteDuplicates(head.next)
        if curr.val == head.val:
            head.next = head.next.next
            return curr
        else:
            return head
"""

# @lc code=end
