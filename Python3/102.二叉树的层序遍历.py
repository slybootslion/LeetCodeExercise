#
# @lc app=leetcode.cn id=102 lang=python3
#
# [102] 二叉树的层序遍历
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
34/34 cases passed (36 ms)
Your runtime beats 46.55 % of python3 submissions
Your memory usage beats 22.31 % of python3 submissions (15.4 MB)
"""
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        if not root:
            return res
        q = [root]
        while q:
            length = len(q)
            res.append([])
            while length:
                node = q.pop(0)
                if node:
                    res[-1].append(node.val)
                    if node.left:
                        q.append(node.left)
                    if node.right:
                        q.append(node.right)
                length -= 1

        return res
# @lc code=end
