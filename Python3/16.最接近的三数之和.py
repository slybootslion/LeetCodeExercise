#
# @lc app=leetcode.cn id=16 lang=python3
#
# [16] 最接近的三数之和
#

# @lc code=start
""" 
暴力枚举稍微优化一下其实也能过
不容易，毕竟O(n^3)
"""

""" 
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        n = len(nums)
        res = 10 ** 7

        def update(cur):
            nonlocal res
            if abs(cur - target) < abs(res - target):
                res = cur

        for i in range(n - 2):
            for j in range(i + 1, n - 1):
                for k in range(j + 1, n):
                    temp = nums[i] + nums[j] + nums[k]
                    if temp == target:
                        return target
                    update(temp)

        return res
"""

""" 
官方答疑：排序 + 双指针
Accepted
131/131 cases passed (2772 ms)
Your runtime beats 5.01 % of python3 submissions
Your memory usage beats 20.22 % of python3 submissions (15.1 MB)
"""

class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        n = len(nums)
        close = 10 ** 7

        def update(cur):
            nonlocal close
            if abs(cur - target) < abs(close - target):
                close = cur

        for index in range(n):
            if index > 0 and nums[index] == nums[index - 1]:
                continue

            right = n - 1
            for left in range(index + 1, n):
                while left < right:
                    count = nums[index] + nums[left] + nums[right]
                    if count == target:
                        return count
                    update(count)

                    if count > target:
                        # 做一次判断，指针移动到下一个不相同的位置，下同
                        # 我试了一下，其实没这个判断也能过，而且成绩也差不多
                        _r = right - 1
                        while left < _r and nums[_r] == nums[right]:
                            _r -= 1
                        right = _r
                    if count < target:
                        _l = left + 1
                        while _l < right and nums[_l] == nums[left]:
                            _l += 1
                        left = _l

        return close


# @lc code=end
