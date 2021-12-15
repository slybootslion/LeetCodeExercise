#
# @lc app=leetcode.cn id=921 lang=python3
#
# [921] 使括号有效的最少添加
#

# @lc code=start
"""
与20题一样的解法，栈的应用
虽然中等，但是其实难度与20题一样。但是用了个list来模拟栈，多用了一个额外空间。
Accepted
115/115 cases passed (36 ms)
Your runtime beats 34.95 % of python3 submissions
Your memory usage beats 5.09 % of python3 submissions (15.1 MB)
"""

"""
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        stack = []

        for string in s:
            if not stack:
                stack.append(string)
                continue
            prev = stack[-1]
            if prev != string and prev == '(':
                stack.pop()
            else:
                stack.append(string)
        return len(stack)
"""

"""
空间常量的做法：计数器。
其实思路是一样的
Accepted
115/115 cases passed (28 ms)
Your runtime beats 89.12 % of python3 submissions
Your memory usage beats 5.09 % of python3 submissions (15.1 MB)
"""


class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        count = 0
        res = 0

        for string in s:
            if string == '(':
                count += 1
            if string == ')':
                count -= 1

                if count == -1:  # 右括号太多了，需要插入一个左括号，所以count清零，需求补1
                    count = 0
                    res += 1
        return res + count

# @lc code=end
