#
# @lc app=leetcode.cn id=496 lang=python3
#
# [496] 下一个更大元素 I
#

# @lc code=start
"""
暴力枚举，时间复杂度O(nm)
Accepted
15/15 cases passed (56 ms)
Your runtime beats 22.2 % of python3 submissions
Your memory usage beats 49.15 % of python3 submissions (15.2 MB)
"""

"""
class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = [None] * len(nums1)

        for r_idx, num in enumerate(nums1):
            idx = nums2.index(num)
            for num2 in nums2[idx + 1:]:
                if num2 > num:
                    res[r_idx] = num2
                    break
            if res[r_idx] is None:
                res[r_idx] = -1

        return res
"""

"""
单调栈+哈希表，时间复杂度O(n)
Accepted
15/15 cases passed (32 ms)
Your runtime beats 82.88 % of python3 submissions
Your memory usage beats 70.23 % of python3 submissions (15.1 MB)
"""


class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        res = {}
        stack = []

        for num2 in nums2[::-1]:
            while stack and num2 > stack[-1]:
                stack.pop()
            res[num2] = stack[-1] if stack else -1
            stack.append(num2)

        return [res[i] for i in nums1]

# @lc code=end
