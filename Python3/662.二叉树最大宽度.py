#
# @lc app=leetcode.cn id=662 lang=python3
#
# [662] 二叉树最大宽度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
没做出来
我的思路是根据层级计算偏移量，不过层级算法没想出来，看了下官方题解。
Accepted
112/112 cases passed (36 ms)
Your runtime beats 94.3 % of python3 submissions
Your memory usage beats 6.04 % of python3 submissions (19.7 MB)
"""


class Solution:
    def widthOfBinaryTree(self, root: TreeNode) -> int:
        d = {}
        max_res = 0

        def handler(node, level=0, offset=0):
            if node:
                d.setdefault(level, offset)
                nonlocal max_res
                max_res = max(max_res, offset - d[level] + 1)
                handler(node.left, level + 1, offset * 2)
                handler(node.right, level + 1, offset * 2 + 1)

        handler(root)

        return max_res
# @lc code=end
