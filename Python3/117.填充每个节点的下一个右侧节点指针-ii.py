#
# @lc app=leetcode.cn id=117 lang=python3
#
# [117] 填充每个节点的下一个右侧节点指针 II
#

# @lc code=start
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""

"""
DFS 前序遍历
这道题官方好像没有给深度遍历的解法，但是评论区有个大神给了个思路，还挺清奇。
Accepted
55/55 cases passed (48 ms)
Your runtime beats 61 % of python3 submissions
Your memory usage beats 38.8 % of python3 submissions (16 MB)
"""


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        d = {}

        def handler(node, flag):
            if not node:
                return
            if d.get(flag):
                d.get(flag).next = node
            d[flag] = node
            handler(node.left, flag + 1)
            handler(node.right, flag + 1)

        handler(root, 1)
        return root

# @lc code=end
