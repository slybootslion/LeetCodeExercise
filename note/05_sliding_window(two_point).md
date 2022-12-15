# 双指针、滑动窗口

### 167. 两数之和 II - 输入有序数组
地址：[167. 两数之和 II - 输入有序数组」](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)

思路：
如果想不到双指针的方法，也可以用hash表来做，只是要注意返回的下标有顺序要求。
另外一种解法就是对撞双指针，当相加的数大于目标值，就减小右指针，如果小于目标值，就增加左指针。

```c++
class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int p1 = 0, p2 = numbers.size() - 1;
        for (int i = 0; i < numbers.size(); i++) {
            if (numbers[p1] + numbers[p2] > target) p2--;
            else if (numbers[p1] + numbers[p2] < target) p1++;
            else return {p1 + 1, p2 + 1};
        }
        return {};
    }
};
```

### 15. 三数之和
地址：[15. 三数之和](https://leetcode.cn/problems/3sum/)

思路：
先固定一个点，在剩下的数组中，求出所有两数之和等于固定点位的数值，即：`nums[j] + nums[k] = -nums[i]`。这个时候，就是调用类似上一题两数之和的函数。
接着将固定点下移，寻找另一组两数之和等于固定点位的数值。
因为不能有重复项，所以先排序，然后通过下标判断是否有相同项，如果有就跳过到下一轮。
整体的时间复杂度是O(n^2)。

```c++
class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        sort(nums.begin(), nums.end()); // 排序
        // nums[i] + nums[j] + nums[k] = 0
        // nums[j] + nums[k] = -nums[i]
        vector<vector<int>> res;
        for(int i = 0; i < nums.size(); i++) {
            if (i > 0 && nums[i] == nums[i - 1]) continue; // 去重
            vector<vector<int>> tnums = twoSum(nums, i + 1, -nums[i]);
            for (vector<int> tnum : tnums) {
                res.push_back({nums[i], tnum[0], tnum[1]});
            }
        }
        return res;
    }

    vector<vector<int>> twoSum(vector<int>& nums, int start, int target) {
        vector<vector<int>> res;
        int j = nums.size() - 1;
        for (int i = start; i < nums.size(); i++) {
            if (i > start && nums[i] == nums[i - 1]) continue; // 去重
            while (i < j && nums[i] + nums[j] > target) j--;
            if (i < j && nums[i] + nums[j] == target)
                res.push_back({nums[i], nums[j]});
        }
        return res;
    }
};
```


### 11. 盛最多水的容器
地址：[11. 盛最多水的容器](https://leetcode.cn/problems/container-with-most-water/)

思路：
对撞双指针，两头往中间移动，每次移动短的那根，将算出来面积最大值返回。

```c++
class Solution {
public:
    int maxArea(vector<int>& height) {
        int i = 0, j = height.size() - 1;
        int res = 0;
        while (i < j) {
            int r = min(height[i], height[j]) * (j - i);
            res = max(res, r);
            height[i] < height[j] ? i++ : j--;
        }
        return res;
    }
};
```
