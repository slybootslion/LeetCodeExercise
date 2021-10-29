#
# @lc app=leetcode.cn id=99 lang=python3
#
# [99] 恢复二叉搜索树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

""" 
python的骚操作
Accepted
1919/1919 cases passed (60 ms)
Your runtime beats 44.69 % of python3 submissions
Your memory usage beats 5.12 % of python3 submissions (15.5 MB)
"""


class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        nums = []

        def inorder(node):
            if not node:
                return
            inorder(node.left)
            nums.append(node)
            inorder(node.right)
        inorder(root)

        def find_two_swapped():
            left, right = None, None
            prev = nums[0]
            for i in range(1, len(nums)):
                if nums[i].val < prev.val:
                    right = nums[i]
                    if left is None:
                        left = prev
                prev = nums[i]
            return left, right

        l, r = find_two_swapped()
        if l and r:
            l.val, r.val = r.val, l.val

# @lc code=end
