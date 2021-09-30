#
# @lc app=leetcode.cn id=223 lang=python3
#
# [223] 矩形面积
#

# @lc code=start
class Solution:
    def computeArea(self, ax1: int, ay1: int, ax2: int, ay2: int, bx1: int, by1: int, bx2: int, by2: int) -> int:
        a, b = (ax2 - ax1) * (ay2 - ay1), (bx2 - bx1) * (by2 - by1)
        over_x = min(ax2, bx2) - max(ax1, bx1)
        over_y = min(ay2, by2) - max(ay1, by1)
        if over_x < 0 or over_y < 0:
          return a + b
        else:
          return a + b - over_x * over_y
# @lc code=end
