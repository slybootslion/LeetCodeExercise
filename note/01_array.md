# 数组

## 先做几个题

### 88. 合并两个有序数组
地址：[88. 合并两个有序数组](https://leetcode.cn/problems/merge-sorted-array/)

思路一:
1、创建一个新的数组
2、同时遍历原有两个数组，哪个数小，就放到新建空数组末尾
3、确保两个数组都遍历ok。细节：注意不要有越界的指引（比如空的数组、遍历完的数组）
4、根据题目要求，把新数组的数，一个个复制到数组1中

浪费一个On的空间但是好理解，好实现，时间复杂度On

```python
class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if not len(num2):
            return
        p1, p2 = 0, 0
        nums3 = []
        for i in range(m + n):
            if p2 >= n or p1 < m and nums1[p1] < nums2[p2]:
                nums3.append(nums1[p1])
                p1+=1
            else:
                nums3.append(nums2[p2])
                p2+=1
        for i in range(m + n):
            nums1[i] = nums3[i]
```

思路二（双指针解法）：
1、根据题目，数组1留有足够的空间，定义两个指针，分别指向数组末尾
2、倒叙遍历，遇到大的数，放入数组1中，细节：注意不要越界，以及数组有效数字是否已经遍历完
时间复杂度On

```c++
class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
            int p1 = m - 1, p2 = n - 1;
            for (int i = m + n - 1; i >= 0; i--) {
                if (p2 < 0 || p1 >= 0 && nums1[p1] > nums2[p2]) {
                    nums1[i] = nums1[p1];
                    p1--;
                } else {
                    nums1[i] = nums2[p2];
                    p2--;
                }
            }
    }
};
```

### 26. 删除有序数组中的重复项
地址：[26. 删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)

思路一：
1、方便理解的做法是，新建一个数组
2、遍历数组，如果当前项与前一项不同，就放入空数组，否则跳过下一轮
3、返回新数组的长度
稍微好理解一点，但是用了额外的空间，时间复杂度是On

```python
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = []
        for i in range(len(nums)):
            if i == 0 or nums[i] != nums[i - 1]:
                n.append(nums[i])
        # 因为数组要原地操作，所以要将新的数组拷贝回原数组中
        for i, val in enumerate(n):
            nums[i] = val
        return len(nums[:len(n)]) # 根据题目要求，截取特定的长度
```

思路二：
1、因为就是要剔除重复的元素，所以不存在向后遍历时元素被覆盖掉找不到的状态
2、所以，遍历数组，遇到重复项，就用后面位置将前面重复位置覆盖，并且记录位置后移
3、最终返回当前位置
时间复杂度On

```c++
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int n = 0;
        for(int i = 0; i < nums.size(); i++)
            if (i == 0 || nums[i] != nums[i - 1]) {
                nums[n] = nums[i];
                n++;
            }
        return n;
    }
};
```

### 283. 移动零
地址：[283. 移动零](https://leetcode.cn/problems/move-zeroes/)

与上面的题是同一个思路，如果数不为零，就留下，后面多出来的数改为零即可，时间复杂度On。

```c++
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        if (nums.size() < 2) return;
        int p = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != 0) {
                nums[p] = nums[i];
                p++;
            }
        }
        while (p < nums.size()) {
            nums[p] = 0;
            p++;
        }
    }
};
```
