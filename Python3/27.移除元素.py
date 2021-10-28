#
# @lc app=leetcode.cn id=27 lang=python3
#
# [27] 移除元素
#

# @lc code=start
""" 
类似26题
Accepted
113/113 cases passed (28 ms)
Your runtime beats 87.21 % of python3 submissions
Your memory usage beats 33.18 % of python3 submissions (15 MB)
"""
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if not len(nums):
            return len(nums)

        p = 0
        while True:
            if p >= len(nums):
                break
            if nums[p] == val:
                del nums[p]
                continue
            p += 1

        return len(nums)
# @lc code=end
