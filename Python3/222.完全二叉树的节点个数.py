#
# @lc app=leetcode.cn id=222 lang=python3
#
# [222] 完全二叉树的节点个数
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
遍历，计数，中等难度可能是要用二分查找+位运算。
老子他妈的不会位运算，滚！
Accepted
18/18 cases passed (80 ms)
Your runtime beats 33.8 % of python3 submissions
Your memory usage beats 41.1 % of python3 submissions (21.8 MB)
"""
"""
class Solution:
    def countNodes(self, root: TreeNode) -> int:
        count = 0

        stack = []
        while root or len(stack):
            while root:
                count += 1
                stack.append(root)
                root = root.left
            root = stack.pop()
            root = root.right

        return count
"""

"""
广度优先
Accepted
18/18 cases passed (76 ms)
Your runtime beats 47.47 % of python3 submissions
Your memory usage beats 8.86 % of python3 submissions (21.9 MB)
"""


class Solution:
    def countNodes(self, root: TreeNode) -> int:
        count = 0

        if not root:
            return count

        q = [root]
        while q:
            length = len(q)
            while length:
                node = q.pop()
                count += 1
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                length -= 1

        return count
# @lc code=end
