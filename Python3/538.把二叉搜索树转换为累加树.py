#
# @lc app=leetcode.cn id=538 lang=python3
#
# [538] 把二叉搜索树转换为累加树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
看到二叉搜索树，首先就应该反应上来中序遍历。
虽然做出来了，但是成绩非常差
Accepted
215/215 cases passed (408 ms)
Your runtime beats 5.42 % of python3 submissions
Your memory usage beats 5.17 % of python3 submissions (17.6 MB)
"""
"""
class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        res = []
        stack = []
        p = root
        while root or len(stack):
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            res.append(root.val)
            root = root.right
        for i in range(len(res)):
            res[i] = sum(res[i:])
        root = p
        while p or len(stack):
            while p:
                stack.append(p)
                p = p.left
            p = stack.pop()
            val = res.pop(0)
            p.val = val
            p = p.right
        return root
"""

"""
看了官方题解，给跪了
反向中序遍历
Accepted
215/215 cases passed (60 ms)
Your runtime beats 61.48 % of python3 submissions
Your memory usage beats 32.23 % of python3 submissions (17.2 MB)
"""


class Solution:
    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        total = 0

        def handler(node):
            if node:
                handler(node.right)
                nonlocal total
                total += node.val
                node.val = total
                handler(node.left)

        handler(root)

        return root
# @lc code=end
