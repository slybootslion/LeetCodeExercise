#
# @lc app=leetcode.cn id=1315 lang=python3
#
# [1315] 祖父节点值为偶数的节点和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先搜索，不要想太复杂，就是传两个值进去
Accepted
76/76 cases passed (108 ms)
Your runtime beats 26.56 % of python3 submissions
Your memory usage beats 47.65 % of python3 submissions (18.3 MB)
"""


class Solution:
    def sumEvenGrandparent(self, root: TreeNode) -> int:
        res = 0

        def handler(gp_val, p_val, node):
            if not node:
                return

            nonlocal res
            if gp_val % 2 == 0:
                res += node.val
            handler(p_val, node.val, node.left)
            handler(p_val, node.val, node.right)

        handler(1, 1, root)
        return res

# @lc code=end
