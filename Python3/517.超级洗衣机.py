#
# @lc app=leetcode.cn id=517 lang=python3
#
# [517] 超级洗衣机
#

# @lc code=start
class Solution:
    def findMinMoves(self, machines: List[int]) -> int:
        length = len(machines)
        total = sum(machines)
        if total % length:
            return -1

        avg = total // length
        sum_ = 0
        ans = 0
        for machine in machines:
            machine -= avg
            sum_ += machine
            ans = max(ans, abs(sum_), machine)
        return ans
# @lc code=end
