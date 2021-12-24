#
# @lc app=leetcode.cn id=151 lang=python3
#
# [151] 翻转字符串里的单词
#

# @lc code=start
"""
无耻api大法好
Accepted
58/58 cases passed (36 ms)
Your runtime beats 61 % of python3 submissions
Your memory usage beats 32.71 % of python3 submissions (15.2 MB)
"""

"""
class Solution:
    def reverseWords(self, s: str) -> str:
        return ' '.join(reversed(s.split()))
"""

"""
python没有办法用空间复杂度O(1)
Accepted
58/58 cases passed (48 ms)
Your runtime beats 21.22 % of python3 submissions
Your memory usage beats 24.94 % of python3 submissions (15.2 MB)
"""


class Solution:
    def reverseWords(self, s: str) -> str:
        arr_str = self.trim_spaces_str_to_list(s)
        self.revers_arr_str(arr_str, 0, len(arr_str) - 1)
        self.revers_each_word(arr_str)
        return ''.join(arr_str)

    def revers_arr_str(self, arr_str, left, right):
        while left < right:
            arr_str[left], arr_str[right] = arr_str[right], arr_str[left]
            left += 1
            right -= 1

    def revers_each_word(self, arr):
        start = end = 0
        n = len(arr)
        while start < n:
            while end < n and arr[end] != ' ':
                end += 1
            self.revers_arr_str(arr, start, end - 1)
            start = end + 1
            end += 1

    def trim_spaces_str_to_list(self, s):
        p1, p2 = 0, len(s) - 1
        while p1 <= p2 and s[p1] == ' ':
            p1 += 1
        while p1 <= p2 and s[p2] == ' ':
            p2 -= 1

        res = []
        while p1 <= p2:
            if s[p1] != ' ':
                res.append(s[p1])
            elif res[-1] != ' ':
                res.append(s[p1])
            p1 += 1
        return res

# @lc code=end
