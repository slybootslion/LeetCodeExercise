#
# @lc app=leetcode.cn id=113 lang=python3
#
# [113] 路径总和 II
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
深度遍历
Accepted
115/115 cases passed (48 ms)
Your runtime beats 37.94 % of python3 submissions
Your memory usage beats 29.47 % of python3 submissions (17.3 MB)
"""

"""
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res = []
        if not root:
            return res

        def handler(node, list_str):
            if not node.left and not node.right:
                list_num = list_str.split(',')
                sum_num = reduce(lambda x, y: int(x) + int(y), list_num)
                if int(sum_num) == targetSum:
                    res.append(list_num)

            if node.left:
                left_str = list_str + ',' + str(node.left.val)
                handler(node.left, left_str)
            if node.right:
                right_str = list_str + ',' + str(node.right.val)
                handler(node.right, right_str)

        handler(root, str(root.val))

        return res
"""

"""
深度遍历 之 我就是要执着的传一个list
Accepted
115/115 cases passed (52 ms)
Your runtime beats 20.78 % of python3 submissions
Your memory usage beats 5.02 % of python3 submissions (20.8 MB)
"""


class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        res = []
        if not root:
            return res

        def handler(node, list_num):
            if not node.left and not node.right:
                list_leaf = list_num[:]
                count = reduce(lambda x, y: x + y, list_leaf)
                if count == targetSum:
                    res.append(list_leaf)

            if node.left:
                left_list = list_num[:]
                left_list.append(node.left.val)
                handler(node.left, left_list)
            if node.right:
                right_list = list_num[:]
                right_list.append(node.right.val)
                handler(node.right, right_list)

        handler(root, [root.val])
        return res

# @lc code=end
