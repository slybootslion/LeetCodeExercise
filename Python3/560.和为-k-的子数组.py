#
# @lc app=leetcode.cn id=560 lang=python3
#
# [560] 和为 K 的子数组
#

# @lc code=start
"""
暴力枚举，本身没有问题，但是会超时
"""

"""
class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        arr = [0]
        for num in nums:
            arr.append(arr[-1] + num)

        count = 0
        for i in range(1, len(arr)):
            for j in range(i + 1):
                if arr[i] - arr[j] == k:
                    count += 1
        return count
"""

"""
哈希表+前缀和
Accepted
89/89 cases passed (60 ms)
Your runtime beats 97.52 % of python3 submissions
Your memory usage beats 31.44 % of python3 submissions (17.2 MB)
"""


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count, prev, d = 0, 0, {0: 1}
        for num in nums:
            prev += num
            if d.get(prev - k):
                count += d.get(prev - k)
            d[prev] = d.get(prev) + 1 if d.get(prev) else 1
        return count

# @lc code=end
