#
# @lc app=leetcode.cn id=283 lang=python3
#
# [283] 移动零
#

# @lc code=start
"""
双指针的解法
Accepted
74/74 cases passed (40 ms)
Your runtime beats 80.93 % of python3 submissions
Your memory usage beats 6.4 % of python3 submissions (15.6 MB)
"""

'''
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        p1 = p2 = 0
        length = len(nums)
        while p2 < length:
            if nums[p2] != 0:
                nums[p1], nums[p2] = nums[p2], nums[p1]
                p1 += 1
            p2 += 1
'''

"""
配合27题解法
没啥意思，都一样的其实
"""


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        p, length = self.removeElement(nums, 0)
        while p < length:
            nums[p] = 0
            p += 1

    def removeElement(self, nums: List[int], val: int) -> tuple:
        length = len(nums)
        p1 = p2 = 0
        if not length:
            return p1, length

        while p2 < length:
            if nums[p2] != val:
                nums[p1] = nums[p2]
                p1 += 1
            p2 += 1

        return p1, length
# @lc code=end
