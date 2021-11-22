#
# @lc app=leetcode.cn id=637 lang=python3
#
# [637] 二叉树的层平均值
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
import collections
import statistics

"""
python算平均值可以用内置库，轻松一点
Accepted
66/66 cases passed (80 ms)
Your runtime beats 6.78 % of python3 submissions
Your memory usage beats 14.25 % of python3 submissions (17.5 MB)
"""

"""
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        res = []
        if not root:
            return res
        q = [root]
        while q:
            length = len(q)
            res.append([])
            while length:
                node = q.pop(0)
                res[-1].append(node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                length -= 1
            res[-1] = statistics.mean(res[-1])

        return res
"""

"""
更优解法
Accepted
66/66 cases passed (48 ms)
Your runtime beats 75.7 % of python3 submissions
Your memory usage beats 43.46 % of python3 submissions (17.3 MB)
"""
class Solution:
    def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:
        res = []
        if not root:
            return res
        q = collections.deque([root])
        while q:
            length = len(q)
            size = length
            count = 0
            while length:
                node = q.popleft()
                count += node.val
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                length -= 1
            res.append(count / size)

        return res
# @lc code=end
