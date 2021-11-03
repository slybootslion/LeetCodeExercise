#
# @lc app=leetcode.cn id=116 lang=python3
#
# [116] 填充每个节点的下一个右侧节点指针
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
感觉这种题，就是脑筋急转弯，没啥意思。
Accepted
58/58 cases passed (172 ms)
Your runtime beats 8.15 % of python3 submissions
Your memory usage beats 73.8 % of python3 submissions (16.6 MB)
"""


class Solution:
    def connect(self, root: 'Node') -> 'Node':
        if not root:
            return root

        def tool(left, right):
            if not left and not right:
                return
            left.next = right
            tool(left.left, left.right)
            tool(right.left, right.right)
            tool(left.right, right.left)

        tool(root.left, root.right)
        return root

# @lc code=end
