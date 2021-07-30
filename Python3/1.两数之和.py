#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
""" 
Accepted
54/54 cases passed (36 ms)
Your runtime beats 87.61 % of python3 submissions
Your memory usage beats 5.43 % of python3 submissions (16 MB)
"""
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      dict = {}
      for idx, num in enumerate(nums):
        if dict.get(num) != None: return (dict[num], idx)
        else: dict[target - num] = idx

# @lc code=end

