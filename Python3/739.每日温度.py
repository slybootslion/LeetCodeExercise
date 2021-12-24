#
# @lc app=leetcode.cn id=739 lang=python3
#
# [739] 每日温度
#

# @lc code=start
"""
暴力枚举
没有问题但会超时，以前好像不会，leetcode垃圾
"""

"""
class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        for idx, t in enumerate(temperatures):
            for i, te in enumerate(temperatures[idx + 1:]):
                if te > t:
                    res[idx] = i + 1
                    break

        return res
"""

"""
单调栈
Accepted
47/47 cases passed (192 ms)
Your runtime beats 62.19 % of python3 submissions
Your memory usage beats 96.43 % of python3 submissions (19.7 MB)
"""

class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        res = [0] * len(temperatures)
        stack = []

        for idx in range(len(temperatures) - 1, -1, -1):
            while stack and temperatures[idx] >= temperatures[stack[-1]]:
                stack.pop()
            if stack:
                res[idx] = stack[-1] - idx
            stack.append(idx)

        return res

# @lc code=end
