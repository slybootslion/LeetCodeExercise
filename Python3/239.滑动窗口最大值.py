#
# @lc app=leetcode.cn id=239 lang=python3
#
# [239] 滑动窗口最大值
#

# @lc code=start

"""
单调队列的实现与应用
Accepted
61/61 cases passed (8676 ms)
Your runtime beats 5 % of python3 submissions
Your memory usage beats 59.61 % of python3 submissions (27 MB)
"""
class MonotonicQueue:
    def __init__(self):
        self.arr = []

    def push(self, num):
        while self.arr and self.arr[-1] < num:
            self.arr.pop()
        self.arr.append(num)

    def pop(self, num):
        if self.arr[0] == num:
            self.arr.pop(0)

    def max(self):
        return self.arr[0]


class Solution:
    def maxSlidingWindow(self, nums: List[int], k: int) -> List[int]:
        res = []
        window = MonotonicQueue()

        for i, num in enumerate(nums):
            if i < k - 1:
                window.push(num)
            else:
                window.push(num)
                res.append(window.max())
                window.pop(nums[i - k + 1])

        return res
# @lc code=end
