#
# @lc app=leetcode.cn id=337 lang=python3
#
# [337] 打家劫舍 III
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先后续遍历 官方题解
我果然还是太菜了
Accepted
124/124 cases passed (52 ms)
Your runtime beats 36.38 % of python3 submissions
Your memory usage beats 69.14 % of python3 submissions (16.9 MB)
"""

class Solution:
    def rob(self, root: TreeNode) -> int:
        def handler(node):
            if not node:
                return 0, 0
            left_select, left_no = handler(node.left)
            right_select, right_no = handler(node.right)
            return node.val + left_no + right_no, max(left_select, left_no) + max(right_select, right_no)

        return max(handler(root))
# @lc code=end
