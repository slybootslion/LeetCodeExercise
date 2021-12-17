#
# @lc app=leetcode.cn id=503 lang=python3
#
# [503] 下一个更大元素 II
#

# @lc code=start
"""
环形数组，单调栈用法，模拟拼接一个两倍长度的原数组再遍历
Accepted
223/223 cases passed (84 ms)
Your runtime beats 54.47 % of python3 submissions
Your memory usage beats 49.57 % of python3 submissions (16.2 MB)
"""
class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        stack = []
        n = len(nums)
        res = [None] * n
        for i in range(n * 2, -1, -1):
            while stack and nums[i % n] >= stack[-1]:
                stack.pop()
            res[i % n] = stack[-1] if stack else -1
            stack.append(nums[i % n])
        return res
# @lc code=end
