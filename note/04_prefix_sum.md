# 前缀和

### 1248. 统计「优美子数组」
地址：[1248. 统计「优美子数组」](https://leetcode.cn/problems/count-number-of-nice-subarrays/)

```python
class Solution:
    def numberOfSubarrays(self, nums: List[int], k: int) -> int:
        # 下标编程1~n
        nums = [0] + nums
        # 有多少个连续子数组，子段和是k
        s = [0] * len(nums)
        # nums对2取于，将数组变为奇偶数的数组
        for i in range(1, len(nums)):
            s[i] = s[i - 1] + nums[i] % 2;
        print(s)

        # count = 长度为n的计数数组
        count = [0] * len(nums)
        for i in range(0, len(s)):
            print(s[i])
            count[s[i]] += 1
        print(count)
        
        # 对于每个i，有多少个s[j] = s[i] - k
        ans = 0
        for i in range(1,len(s)):
            if s[i] - k >= 0:
                ans += count[s[i] - k]
        return ans
```
