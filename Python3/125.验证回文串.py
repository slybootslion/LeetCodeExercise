#
# @lc app=leetcode.cn id=125 lang=python3
#
# [125] 验证回文串
#

# @lc code=start
""" 
相向双指针算法
Accepted
480/480 cases passed (60 ms)
Your runtime beats 25.38 % of python3 submissions
Your memory usage beats 75.09 % of python3 submissions (15.1 MB)
"""

""" 
class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        while left < right:
            if not self.is_valid(s[left]):
                left += 1
                continue
            if not self.is_valid(s[right]):
                right -= 1
                continue
            if s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True

    def is_valid(self, char):
        return char.isdigit() or char.isalpha()
"""

""" 
补一个，同样的思路，大概是更好的写法
Accepted
480/480 cases passed (60 ms)
Your runtime beats 25.38 % of python3 submissions
Your memory usage beats 79.63 % of python3 submissions (15.1 MB)
"""

class Solution:
    def is_valid(self, char):
        return char.isdigit() or char.isalpha()

    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        while left < right:
            while left < right and not self.is_valid(s[left]):
                left += 1
            while left < right and not self.is_valid(s[right]):
                right -= 1
            if left < right and s[left].lower() != s[right].lower():
                return False
            left += 1
            right -= 1
        return True

# @lc code=end
