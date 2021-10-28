#
# @lc app=leetcode.cn id=2000 lang=python3
#
# [2000] 反转单词前缀
#

# @lc code=start
""" 
调包侠解法，全程内置api
能过，面试一分没有
Accepted
112/112 cases passed (36 ms)
Your runtime beats 32.82 % of python3 submissions
Your memory usage beats 7.24 % of python3 submissions (15.1 MB)
"""

""" 
class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        idx = word.find(ch)
        if idx > -1:
            prefix = word[:idx + 1]
            return prefix[::-1] + word[idx + 1:]
        else:
            return word
"""

""" 
方法二：可以说是双指针的遍历，不用任何api
Accepted
112/112 cases passed (32 ms)
Your runtime beats 62.79 % of python3 submissions
Your memory usage beats 16.28 % of python3 submissions (15.1 MB)
"""

class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        p = 0
        prefix = ''
        sub_str = ''
        flag = False
        
        while p < len(word):
            prefix = word[p] + prefix
            if word[p] == ch:
                flag = True
                break
            p += 1
        
        if len(prefix) <= len(word) and flag:
            p += 1
            while p < len(word):
                sub_str += word[p]
                p += 1
        else:
            return word
        return prefix + sub_str



# @lc code=end
