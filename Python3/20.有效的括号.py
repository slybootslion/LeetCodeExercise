#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start
"""
Accepted
91/91 cases passed (36 ms)
Your runtime beats 45.21 % of python3 submissions
Your memory usage beats 8.28 % of python3 submissions (15.1 MB)
"""
class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        s_map = {
            ')': '(',
            ']': '[',
            '}': '{'
        }
        for char in s:
            if char not in s_map:
                stack.append(char)
            elif not stack or s_map.get(char) != stack.pop():
                return False
        return not stack

# @lc code=end
