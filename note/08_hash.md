# 哈希表

### 242. 有效的字母异位词

地址：[242. 有效的字母异位词](https://leetcode.cn/problems/valid-anagram/)

如果想不到哈希表的方式，最简单的是进行排序后再比较，时间复杂度O(NlogN)

```c++
aclass Solution {
public:
    bool isAnagram(string s, string t) {
        sort(s.begin(), s.end()); sort(t.begin(), t.end());
        return s == t;
    }
};
```

更有效率的解法是哈希表

```python
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        d1, d2 = {}, {}
        for i in range(len(s)):
            ch1, ch2 = s[i], t[i]
            d1[ch1] = d1.get(ch1, 0) + 1
            d2[ch2] = d2.get(ch2, 0) + 1
        return d1 == d2
```

### 1. 两数之和

地址：[1. 两数之和](https://leetcode.cn/problems/two-sum/)

哈希表的典型用法

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        map<int, int> mp;
        map<int, int>::iterator it;
        for (int i = 0; i < nums.size(); i++) {
            int num = nums[i];
            it = mp.find(target - num);
            if (it != mp.end()) {
                return {it->second, i};
            } else {
                mp[num] = i;
            }
        }
        return {};
    }
};
```
