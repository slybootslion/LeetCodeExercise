#
# @lc app=leetcode.cn id=100 lang=python3
#
# [100] 相同的树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
dfs
Accepted
60/60 cases passed (28 ms)
Your runtime beats 87.17 % of python3 submissions
Your memory usage beats 19.4 % of python3 submissions (15.1 MB)
"""
import collections

"""
class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True

        if p and q:
            l = self.isSameTree(p.left, q.left)
            r = self.isSameTree(p.right, q.right)
            return l and r and p.val == q.val

        return False
"""

"""
bfs
Accepted
60/60 cases passed (32 ms)
Your runtime beats 65.41 % of python3 submissions
Your memory usage beats 18.24 % of python3 submissions (15.1 MB)
"""


class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        if not p and not q:
            return True
        if not p or not q:
            return False

        list_p = collections.deque([p])
        list_q = collections.deque([q])

        while list_q and list_q:
            node_p = list_p.popleft()
            node_q = list_q.popleft()
            if node_p.val != node_q.val:
                return False
            left_p, right_p = node_p.left, node_p.right
            left_q, right_q = node_q.left, node_q.right
            if (left_q and not left_p) or (not left_q and left_p):
                return False
            if (right_q and not right_p) or (not right_q and right_p):
                return False
            if left_p:
                list_p.append(left_p)
            if right_p:
                list_p.append(right_p)
            if left_q:
                list_q.append(left_q)
            if right_q:
                list_q.append(right_q)

        return not list_p and not list_q
# @lc code=end
