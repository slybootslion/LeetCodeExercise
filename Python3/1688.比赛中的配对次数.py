#
# @lc app=leetcode.cn id=1688 lang=python3
#
# [1688] 比赛中的配对次数
#

# @lc code=start
class Solution:
    def numberOfMatches(self, n: int) -> int:
        self.count = 0
        self.computedMatch(n)
        return self.count

    def computedMatch (self, n):
        if n == 1:
            return

        self.count += n // 2
        if n % 2:
            self.computedMatch(n // 2 + 1)    
        else:
            self.computedMatch(n // 2)
# @lc code=end

