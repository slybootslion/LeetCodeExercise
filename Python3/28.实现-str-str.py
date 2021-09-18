#
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] 实现 strStr()
#

# @lc code=start
""" 
方法一：内置API，成绩还贼好，但是这样做肯定是不行的
Accepted
80/80 cases passed (28 ms)
Your runtime beats 97.36 % of python3 submissions
Your memory usage beats 54.04 % of python3 submissions (15.1 MB)
"""

""" 
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        return haystack.find(needle)
"""

""" 
方法二：真正对且正常的算法
解法没问题，但是leetcode会超时，时间复杂度O(n^2)都过不了，leetcode卡的太死了，还简单题目，垃圾。
"""

""" 
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0

        for i in range(len(haystack) - len(needle) + 1):
            for j in range(len(needle)):
                if haystack[i + j] != needle[j]:
                    break
            else:
                return i

        return -1
"""

""" 
方法二改版：正常方法能过，但是其实还是api调用。
Accepted
80/80 cases passed (48 ms)
Your runtime beats 53.11 % of python3 submissions
Your memory usage beats 33.34 % of python3 submissions (15.2 MB)
"""

class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0

        for i in range(len(haystack) - len(needle) + 1):
          if haystack[i: i + len(needle)] == needle:
            return i
        
        return -1


""" 
方法三：Robin Karp算法
时间复杂度O(n + m)。
KMP？不存在的，我不会我也不想会。
Accepted
80/80 cases passed (48 ms)
Your runtime beats 53.11 % of python3 submissions
Your memory usage beats 22.54 % of python3 submissions (15.3 MB)
"""

""" 
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        BASE = 1000000

        if haystack == None or needle == None:
            return -1

        m = len(needle)
        if m == 0:
            return 0

        power = 1
        targetCode = 0
        for i in range(m):
            power = ((power * 31) % BASE)
            targetCode = (targetCode * 31 + ord(needle[i])) % BASE

        hashCode = 0
        for i in range(len(haystack)):
            hashCode = (hashCode * 31 + ord(haystack[i])) % BASE
            if i < m - 1:
                continue
            if i >= m:
                hashCode = hashCode - (ord(haystack[i - m]) * power) % BASE
                if hashCode < 0:
                    hashCode += BASE

            if hashCode == targetCode:
                if haystack[i - m + 1: i + 1] == needle:
                    return i - m + 1

        return -1
"""

# @lc code=end
