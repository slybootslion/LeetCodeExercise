#
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#

# @lc code=start

# 方法一：对撞双指针，暴力枚举
'''
class Solution:
    """
    @param s: input string
    @return: a string as the longest palindromic substring
    """
    def longestPalindrome(self, s: str) -> str:
        if not s:
          return s

        for length in range(len(s), 0, -1):
            for i in range(len(s) - length + 1):
                if self.is_palindrome(s, i, i + length - 1):
                    return s[i: i + length]

    def is_palindrome(self, s, left, right):
        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True
'''

# 方法二：中心点枚举
'''
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s:
            return s

        answer = (0, 0)
        for middle in range(len(s)):
            answer = max(answer, self.get_palindrome_from(s, middle, middle))
            answer = max(answer, self.get_palindrome_from(
                s, middle, middle + 1))
        return s[answer[1]: answer[0] + answer[1]]

    def get_palindrome_from(self, s, left, right):
        while left >= 0 and right < len(s):
            if s[left] != s[right]:
                return right - left - 1, left + 1
            left -= 1
            right += 1
        return right - left - 1, left + 1
'''

# 方法三：动态规划

""" 
Accepted
177/177 cases passed (5888 ms)
Your runtime beats 40.99 % of python3 submissions
Your memory usage beats 26.21 % of python3 submissions (22.6 MB)
s"""
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if not s:
            return s

        n = len(s)
        is_palindrome = [[False] * n for _ in range(n)]
        for i in range(n):
            is_palindrome[i][i] = True
        for i in range(1, n):
            is_palindrome[i][i - 1] = True

        start, longest = 0, 1
        for length in range(2, n + 1):
            for i in range(n - length + 1):
                j = i + length - 1
                is_palindrome[i][j] = is_palindrome[i +
                                                    1][j - 1] and s[i] == s[j]
                if is_palindrome[i][j] and length > longest:
                    longest = length
                    start = i

        return s[start: start + longest]

# @lc code=end
