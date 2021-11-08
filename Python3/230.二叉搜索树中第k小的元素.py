#
# @lc app=leetcode.cn id=230 lang=python3
#
# [230] 二叉搜索树中第K小的元素
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
深度优先，中序遍历就是 从小到大 的排序
Accepted
93/93 cases passed (52 ms)
Your runtime beats 44.3 % of python3 submissions
Your memory usage beats 75.39 % of python3 submissions (18.6 MB)
"""


class Solution:
    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:
        temp = []
        stack = []
        while root or len(stack):
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            temp.append(root.val)
            root = root.right
        return temp[k - 1]
# @lc code=end
