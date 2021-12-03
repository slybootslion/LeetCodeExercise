#
# @lc app=leetcode.cn id=438 lang=python3
#
# [438] 找到字符串中所有字母异位词
#

# @lc code=start
"""
滑动窗口
固定窗口暴力枚举会超时，套用模板可过
Accepted
61/61 cases passed (100 ms)
Your runtime beats 38.58 % of python3 submissions
Your memory usage beats 9.46 % of python3 submissions (15.5 MB)
"""


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        need = {}
        window = {}
        for char in p:
            count = need.get(char, 0)
            need[char] = count + 1

        left, right, valid, res = 0, 0, 0, []
        while right < len(s):
            c = s[right]
            right += 1
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window.get(c) == need.get(c):
                    valid += 1
            while right - left >= len(p):
                if valid == len(need):
                    res.append(left)
                d = s[left]
                left += 1
                if d in need:
                    if window.get(d) == need.get(d):
                        valid -= 1
                    window[d] = window.get(d) - 1
        return res

# @lc code=end
