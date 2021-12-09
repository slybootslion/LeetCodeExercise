#
# @lc app=leetcode.cn id=870 lang=python3
#
# [870] 优势洗牌
#

# @lc code=start
"""
hashmap + 对撞双指针
国际服LeetCode能通过，国服LeetCode超时，我他妈反手就是一个操
"""
from _bisect import bisect_right

"""
class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        nums2_tuple = []
        for idx, num2 in enumerate(nums2):
            nums2_tuple.append((num2, idx))
        nums2_tuple.sort(reverse=True)
        left, right = 0, len(nums1) - 1
        res = [0] * len(nums1)
        while nums2_tuple:
            num2, idx = nums2_tuple.pop(0)
            if nums1[right] > num2:
                res[idx] = nums1[right]
                right -= 1
            else:
                res[idx] = nums1[left]
                left += 1
        return res
"""

"""
leetcode上其他人写的
Accepted
67/67 cases passed (6804 ms)
Your runtime beats 9.06 % of python3 submissions
Your memory usage beats 95.75 % of python3 submissions (26.2 MB)
"""
class Solution:
    def advantageCount(self, nums1: List[int], nums2: List[int]) -> List[int]:
        nums1.sort()
        res = []
        for i in nums2:
            j = bisect_right(nums1, i)
            if j < len(nums1):
                res.append(nums1[j])
                del nums1[j]
            else:
                res.append(nums1[0])
                del nums1[0]
        return res
# @lc code=end
