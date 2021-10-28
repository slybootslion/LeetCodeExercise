#
# @lc app=leetcode.cn id=11 lang=python3
#
# [11] 盛最多水的容器
#

# @lc code=start
""" 
对撞双指针，根据情况计算面积，留下最大的返回。
Accepted
60/60 cases passed (272 ms)
Your runtime beats 5.11 % of python3 submissions
Your memory usage beats 6.89 % of python3 submissions (24.4 MB)
"""

class Solution:
    def maxArea(self, height: List[int]) -> int:
        left, right = 0, len(height) - 1
        max_num = 0

        while left < right:
            area = min(height[left], height[right]) * (right - left)
            max_num = max(max_num, area)
            if height[left] > height[right]:
                right -= 1
            else:
                left += 1

        return max_num

# @lc code=end
