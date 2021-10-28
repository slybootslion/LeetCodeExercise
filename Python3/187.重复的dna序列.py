#
# @lc app=leetcode.cn id=187 lang=python3
#
# [187] 重复的DNA序列
#

# @lc code=start
"""  
字典+滑动窗
Accepted
31/31 cases passed (60 ms)
Your runtime beats 68.77 % of python3 submissions
Your memory usage beats 5.1 % of python3 submissions (27.8 MB)
"""
class Solution:
    def findRepeatedDnaSequences(self, s: str) -> List[str]:
        res = []
        l = 10
        cnt = {}

        for i in range(len(s) - l + 1):
            sub_str = s[i: i + l]
            cnt[sub_str] = cnt.get(sub_str, 0) + 1
            if cnt[sub_str] == 2:
                res.append(sub_str)
                
        return res

# @lc code=end

