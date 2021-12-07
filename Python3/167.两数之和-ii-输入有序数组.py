#
# @lc app=leetcode.cn id=167 lang=python3
#
# [167] 两数之和 II - 输入有序数组
#

# @lc code=start
"""
对撞双指针
吐槽：这下标从1开始，why？？？
Accepted
19/19 cases passed (36 ms)
Your runtime beats 68.34 % of python3 submissions
Your memory usage beats 5.19 % of python3 submissions (15.4 MB)
"""


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        p1, p2 = 1, len(numbers)
        while p1 < p2:
            total = numbers[p1 - 1] + numbers[p2 - 1]
            if total == target:
                return [p1, p2]
            elif total > target:
                p2 -= 1
            elif total < target:
                p1 += 1
# @lc code=end
