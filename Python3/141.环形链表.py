#
# @lc app=leetcode.cn id=141 lang=python3
#
# [141] 环形链表
#

# @lc code=start
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

"""
快慢双指针
Accepted
20/20 cases passed (60 ms)
Your runtime beats 22.5 % of python3 submissions
Your memory usage beats 58.29 % of python3 submissions (18.2 MB)
"""
"""
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        p1 = p2 = head
        while p2 and p2.next:
            p2 = p2.next.next
            p1 = p1.next
            if p2 == p1: # python可以这么比，就是这么屌
                return True
        return False
"""

"""
无耻挂载额外垃圾数据
Accepted
20/20 cases passed (52 ms)
Your runtime beats 64.32 % of python3 submissions
Your memory usage beats 32.78 % of python3 submissions (18.3 MB)
"""

"""
class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        p1 = head
        while p1:
            p1.flag = True
            p1 = p1.next
            if hasattr(p1, 'flag'):
                return True
        return False
"""

"""
今天看到的一个奇葩思维，自己卡死一个临界点，不停的循环，如果没有遇到None就是环，如果遇到了就不是
试了一下，还真的可行
Accepted
20/20 cases passed (56 ms)
Your runtime beats 40.71 % of python3 submissions
Your memory usage beats 35.15 % of python3 submissions (18.3 MB)
"""


class Solution:
    def hasCycle(self, head: ListNode) -> bool:
        count = pow(10, 4) + 1
        p = head
        while count:
            if not p:
                return False
            p = p.next
            count -= 1

        return True

# @lc code=end
