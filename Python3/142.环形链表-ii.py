#
# @lc app=leetcode.cn id=142 lang=python3
#
# [142] 环形链表 II
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

"""
不能用挂载垃圾数据的方式来判断是否为环形链表了，因为题目要求：Do not modify the linked list.
很烦，判断了半天，不想弄了。
Accepted
16/16 cases passed (48 ms)
Your runtime beats 68.53 % of python3 submissions
Your memory usage beats 22.22 % of python3 submissions (17.9 MB)
"""


class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        if not head:
            return None

        p1 = p2 = head
        while p2 and p2.next:
            p1 = p1.next
            p2 = p2.next.next
            if p2 == p1:
                break
        if not p2 or not p2.next:
            return None

        p1 = head
        while p1 != p2:
            p1 = p1.next
            p2 = p2.next
        return p1

# @lc code=end
