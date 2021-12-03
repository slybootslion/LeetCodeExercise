#
# @lc app=leetcode.cn id=567 lang=python3
#
# [567] 字符串的排列
#

# @lc code=start
"""
固定单位滑动窗口，感觉效率不咋滴，算是暴力枚举了，但是能通过。
Accepted
106/106 cases passed (5452 ms)
Your runtime beats 7.31 % of python3 submissions
Your memory usage beats 13.36 % of python3 submissions (15.2 MB)
"""

"""
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        length = len(s1)
        left, right = 0, length
        need = {}
        for char in s1:
            count = need.get(char, 0)
            need[char] = count + 1

        while right <= len(s2):
            sub_str = s2[left:right]
            p = 0
            nd = need.copy()
            while p < length:
                char = sub_str[p]
                if char in need:
                    count = nd.get(char)
                    if count < 0:
                        break
                    nd[char] = nd.get(char) - 1
                else:
                    break
                p += 1
            if all(i == 0 for i in list(nd.values())):
                return True

            right += 1
            left += 1

        return False
"""

"""
滑动窗口
"""

"""
滑动窗口算法框架
window: 窗口中的字符
need：需要凑齐的字符
valid标识窗口中满足need条件的字符的个数，如果valid和len(need)相同，说明窗口已经满足条件，完全覆盖了字串。
- 一个字符进入窗口时，增加window计数器
- 一个字符移出窗口的时候，应该减少window计数器
- 当valid满足need时，应该收缩窗口
- 在收缩窗口的时候更新最终结构
"""

"""
class Solution:
    def slidingWindow(self, s1: str, s2: str) -> bool:
        need = {}
        window = {}
        for char in s2:
            count = need.get(char, 0)
            need[char] = count + 1

        left = right = valid = 0

        while right < len(s1):
            c = s1[right]
            right += 1
            # 进行窗口内数据的一系列更新
            # ...

            # debug 输出的位置
            print('widow: [{}, {}]\n'.format(left, right))

            # 判断左窗口是否要收缩（循环窗口是否搜索的判断条件）
            while 'window needs shrink':
                d = s1[left]
                left += 1
                # 进行窗口内数据的一系列更新
                # ...
"""

"""
套模板重新写这道题
Accepted
106/106 cases passed (64 ms)
Your runtime beats 65.4 % of python3 submissions
Your memory usage beats 24.64 % of python3 submissions (15.1 MB)
"""


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        need = {}
        window = {}
        for char in s1:
            count = need.get(char, 0)
            need[char] = count + 1

        left = right = valid = 0

        while right < len(s2):
            c = s2[right]
            right += 1
            if c in need:
                window[c] = window.get(c, 0) + 1
                if window[c] == need[c]:
                    valid += 1

            while right - left >= len(s1):
                if valid == len(need):
                    return True
                d = s2[left]
                left += 1
                if d in need:
                    if window.get(d) == need.get(d):
                        valid -= 1
                    window[d] = window.get(d) - 1

        return False

# @lc code=end
