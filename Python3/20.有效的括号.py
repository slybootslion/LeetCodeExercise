#
# @lc app=leetcode.cn id=20 lang=python3
#
# [20] 有效的括号
#

# @lc code=start
"""
栈应用的典型题
Accepted
91/91 cases passed (36 ms)
Your runtime beats 44.84 % of python3 submissions
Your memory usage beats 12.06 % of python3 submissions (15.1 MB)
"""
class Solution:
    def isValid(self, s: str) -> bool:
        _dict = {
            '[': ']',
            '(': ')',
            '{': '}'
        }

        _l = []

        for string in s:
            if not _dict.get(string):
                if not _l:
                    return False
                item = _l.pop()
                if _dict.get(item) != string:
                    return False
            else:
                _l.append(string)

        return len(_l) == 0

# @lc code=end
