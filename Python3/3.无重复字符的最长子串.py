#
# @lc app=leetcode.cn id=3 lang=python3
#
# [3] 无重复字符的最长子串
#

# @lc code=start

"""
滑动窗口
因为没有参照字串，所以，window中不应该有重复的内容，如果有，就开始收缩窗口
当跳出收缩窗口逻辑的时候，更新判断逻辑（无重复的字串长度是不是更大了）
Accepted
987/987 cases passed (100 ms)
Your runtime beats 21.68 % of python3 submissions
Your memory usage beats 32.07 % of python3 submissions (15.1 MB)
"""

"""
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        window = {}
        left = right = 0

        res = 0

        while right < len(s):
            c = s[right]
            right += 1
            window[c] = window.get(c, 0) + 1

            while window.get(c) > 1:
                d = s[left]
                left += 1
                window[d] = window.get(d) - 1
            res = max(len(s[left:right]), res)

        return res
"""

"""
双指针解法
Accepted
987/987 cases passed (64 ms)
Your runtime beats 56.45 % of python3 submissions
Your memory usage beats 45.29 % of python3 submissions (15.1 MB)
"""


class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left = right = res = 0
        d = {}
        while right < len(s):
            char = s[right]
            if char in d and d.get(char) >= left:
                left = d.get(char) + 1
            res = max(res, right - left + 1)
            d[char] = right
            right += 1
        return res
# @lc code=end
