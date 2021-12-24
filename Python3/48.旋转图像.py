#
# @lc app=leetcode.cn id=48 lang=python3
#
# [48] 旋转图像
#

# @lc code=start
"""
先根据从左上到右下的对称轴交换，再将每一行的翻转，就是顺时针90度
Accepted
21/21 cases passed (44 ms)
Your runtime beats 11.52 % of python3 submissions
Your memory usage beats 14.89 % of python3 submissions (15.1 MB)
"""


class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        row = len(matrix)
        for idx in range(row):
            for j in range(idx, row):
                matrix[idx][j], matrix[j][idx] = matrix[j][idx], matrix[idx][j]

        for arr in matrix:
            self.reverse_arr(arr)

    def reverse_arr(self, arr):
        left, right = 0, len(arr) - 1
        while left < right:
            arr[left], arr[right] = arr[right], arr[left]
            left += 1
            right -= 1


"""
如果要逆时针旋转90度
先根据从右上到左下的对称轴交换，再将每一行的翻转，就是顺时针90度
"""
# @lc code=end
