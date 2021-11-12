#
# @lc app=leetcode.cn id=565 lang=python3
#
# [565] 数组嵌套
#

# @lc code=start
"""
这也是深度优先吗？
Accepted
885/885 cases passed (144 ms)
Your runtime beats 36.49 % of python3 submissions
Your memory usage beats 27.47 % of python3 submissions (25.3 MB)
"""
class Solution:
    def arrayNesting(self, nums: List[int]) -> int:
        res = 0
        mark_list = [None] * len(nums)

        for idx in range(len(nums)):
            if not mark_list[idx]:
                start = nums[idx]
                count = 0
                while True:
                    start = nums[start]
                    count += 1
                    mark_list[start] = True
                    if start == nums[idx]:
                        break
                res = max(res, count)

        return res
# @lc code=end
