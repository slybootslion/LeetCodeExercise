#
# @lc app=leetcode.cn id=441 lang=python3
#
# [441] 排列硬币
#

# @lc code=start
""" 
Accepted
1335/1335 cases passed (1060 ms)
Your runtime beats 11.49 % of python3 submissions
Your memory usage beats 39.48 % of python3 submissions (15 MB)
"""
class Solution:
    def arrangeCoins(self, n: int) -> int:
        k = n
        count = 0
        for i in range(n):
            k = k - (i + 1)
            count += 1
            if k == 0:
                return count
            elif k < 0:
                return count - 1

# @lc code=end

