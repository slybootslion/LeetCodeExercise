#
# @lc app=leetcode.cn id=680 lang=python3
#
# [680] 验证回文字符串 Ⅱ
#

# @lc code=start
""" 
思路：相向双指针
但是根据条件需要额外做一个判断，就是左边或者右边的指针挪一步之后，是否是回文串。
Accepted
467/467 cases passed (128 ms)
Your runtime beats 67.39 % of python3 submissions
Your memory usage beats 95.39 % of python3 submissions (14.9 MB)
"""


class Solution:
    def validPalindrome(self, s: str) -> bool:
        if not s:
            return False

        left, right = self.find_difference(s, 0, len(s) - 1)
        if left >= right:
            return True

        return self.is_palindrome(s, left, right - 1) or self.is_palindrome(s, left + 1, right)

    def is_palindrome(self, s, left, right):
        left, right = self.find_difference(s, left, right)
        return left >= right

    def find_difference(self, s, left, right):
        while left < right:
            if s[left] != s[right]:
                return left, right
            left += 1
            right -= 1
        return left, right
# @lc code=end
