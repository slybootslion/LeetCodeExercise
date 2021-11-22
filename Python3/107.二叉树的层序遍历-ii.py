#
# @lc app=leetcode.cn id=107 lang=python3
#
# [107] 二叉树的层序遍历 II
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
把之前的102拿出来再做一遍，返回前反转一下
Accepted
34/34 cases passed (32 ms)
Your runtime beats 73.45 % of python3 submissions
Your memory usage beats 14.31 % of python3 submissions (15.4 MB)
"""
import collections

"""
class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        res = []
        if not root:
            return res
        q = [root]

        while q:
            length = len(q)
            res.insert(0,[])
            while length:
                node = q.pop(0)
                res[0].append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                length -= 1
        return res
"""

"""
官方更python的写法，道理是一样的
Accepted
34/34 cases passed (32 ms)
Your runtime beats 73.45 % of python3 submissions
Your memory usage beats 27.96 % of python3 submissions (15.4 MB)
"""


class Solution:
    def levelOrderBottom(self, root: TreeNode) -> List[List[int]]:
        res = []
        if not root:
            return res
        q = collections.deque([root])
        while q:
            length = len(q)
            res.append([])
            while length:
                node = q.popleft()
                res[-1].append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                length -= 1

        return res[::-1]

# @lc code=end
