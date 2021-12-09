#
# @lc app=leetcode.cn id=344 lang=python3
#
# [344] 反转字符串
#

# @lc code=start
"""
这个题被修改了，我记得以前用JavaScript做的时候，是返回反转后的数组，现在需要原地修改数组了。
所以，list(reversed(s))和s[::-1]这种方法都用不成了。
那正确解法就是对撞双指针，也没啥难度。
Accepted
477/477 cases passed (44 ms)
Your runtime beats 43.61 % of python3 submissions
Your memory usage beats 20.53 % of python3 submissions (19.3 MB)
"""


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        p1, p2 = 0, len(s) - 1
        while p1 < p2:
            s[p1], s[p2] = s[p2], s[p1] # python的骚操作
            p1 += 1
            p2 -= 1
# @lc code=end
