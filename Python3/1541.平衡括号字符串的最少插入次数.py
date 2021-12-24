#
# @lc app=leetcode.cn id=1541 lang=python3
#
# [1541] 平衡括号字符串的最少插入次数
#

# @lc code=start
"""
921题的升级版
"""
class Solution:
    def minInsertions(self, s: str) -> int:
        res = count = 0

        for string in s:
            if string == '(':
                count += 2
                if count % 2 == 1:
                    count -= 1
                    res += 1

            if string == ')':
                count -= 1
                if count == -1:
                    res += 1
                    count = 1

        return res + count

# @lc code=end
