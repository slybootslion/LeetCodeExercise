#
# @lc app=leetcode.cn id=76 lang=python3
#
# [76] 最小覆盖子串
#

# @lc code=start

"""
滑动窗口，滑动窗口，滑动窗口
Accepted
266/266 cases passed (96 ms)
Your runtime beats 42.81 % of python3 submissions
Your memory usage beats 17.07 % of python3 submissions (15.3 MB)
"""

"""
class Solution:
    def minWindow(self, s: str, t: str) -> str:
        left, right = 0, 0
        need = {}
        for char in t:
            count = need.get(char, 0)
            need[char] = count + 1
        need_type = len(need)

        res = ''
        while right < len(s):
            char = s[right]
            if char in need:
                need[char] = need.get(char) - 1
                if need.get(char) == 0:
                    need_type -= 1
            while need_type == 0:
                new_res = s[left:right + 1]
                if not res or len(new_res) < len(res):
                    res = new_res
                char2 = s[left]
                if char2 in need:
                    need[char2] = need.get(char2) + 1
                    if need.get(char2) == 1:
                        need_type += 1
                left += 1
            right += 1
        return res
"""

"""
套模板解法
Accepted
266/266 cases passed (104 ms)
Your runtime beats 35.95 % of python3 submissions
Your memory usage beats 15.84 % of python3 submissions (15.3 MB)
"""


class Solution:
    def minWindow(self, s: str, t: str) -> str:
        need = {}
        window = {}
        for char in t:
            count = need.get(char, 0)
            need[char] = count + 1

        left = right = valid = 0
        res = ''

        while right < len(s):
            c = s[right]
            right += 1
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1

            while valid == len(need):
                new_res = s[left: right]
                if not res or len(new_res) < len(res):
                    res = new_res
                d = s[left]
                left += 1
                if d in need:
                    if window.get(d) == need.get(d):
                        valid -= 1
                    window[d] = window.get(d, 0) - 1

        return res

# @lc code=end
