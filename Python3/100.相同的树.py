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
Accepted
60/60 cases passed (28 ms)
Your runtime beats 87.17 % of python3 submissions
Your memory usage beats 19.4 % of python3 submissions (15.1 MB)
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
# @lc code=end
