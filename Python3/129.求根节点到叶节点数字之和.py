#
# @lc app=leetcode.cn id=129 lang=python3
#
# [129] 求根节点到叶节点数字之和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from functools import reduce


"""
深度优先遍历
Accepted
108/108 cases passed (32 ms)
Your runtime beats 64.42 % of python3 submissions
Your memory usage beats 27.77 % of python3 submissions (15 MB)
"""
class Solution:
    def sumNumbers(self, root: TreeNode) -> int:

        nums = []

        def handler(node, str_num):
            if not node.left and not node.right:
                nums.append(int(str_num))

            if node.left:
                handler(node.left, str_num + str(node.left.val))
            if node.right:
                handler(node.right, str_num + str(node.right.val))

        handler(root, str(root.val))
        return reduce(lambda x, y: x + y, nums)
# @lc code=end
