# 树

### 98. 验证二叉搜索树

地址：[98. 验证二叉搜索树](https://leetcode.cn/problems/validate-binary-search-tree/)

思路一：
因为是二叉搜索树，所以按照二叉搜索树的特点，左子树的所有节点，一定比根节点小，右子树的所有节点，一定比根节点大，递归进行判断。

```c++
class Solution {
public:
    bool isValidBST(TreeNode* root) {
        return this->dfs(root, LONG_MIN, LONG_MAX);
    }
    bool dfs(TreeNode *root, long min, long max) {
        if (!root) return true;
        cout << (root->val <= min) << " " << (root->val >= max) << " " << max << endl;
        if (root->val <= min || root->val >= max) return false;
        return dfs(root->left, min, root->val) && dfs(root->right, root->val, max);
    }
};
```

思路二：
根据二叉搜索树的特性，中序遍历的二叉搜索树是一个递增的顺序，所以，中序遍历判断是否递增即可。

```python
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        res = []
        def dfs(node):
            if not node:
                return
            if node.left:
                dfs(node.left)
            res.append(node.val)
            if node.right:
                dfs(node.right)
        dfs(root)

        def check(l):
            for i in range(len(l)):
                if i > 0 and l[i] <= l[i - 1]:
                    return False
            return True
        return check(res)
```

### 236. 二叉树的最近公共祖先

地址：[236. 二叉树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)

思路：
如果是公共祖先，左子树或者右子树，必定有一个能返回节点，如果没有返回，说明什么都没有，以此进行筛选。

```python
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root == q or root == p:
            return root
        left = self.lowestCommonAncestor(root.left, p, q)
        right = self.lowestCommonAncestor(root.right, p, q)
        return left if not right else right if not left else root # 如果左子树没有就是右子树，右子树也没有就是根
```

还有一个衍生题：[235. 二叉搜索树的最近公共祖先](https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/)
上面的解法也ok，但是因为是二叉搜索树，所以有更简单的判断:
如果两个值比root小，那一定在左子树上，如果两个值比root大，那肯定在右子树上，否则root就是最近公共祖先。

```c++
// 递归写法
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        if (p->val < root->val && q->val < root->val) return lowestCommonAncestor(root->left, p, q);
        if (p->val > root->val && q->val > root->val) return lowestCommonAncestor(root->right, p, q);
        return root;
    }
};
// 迭代写法
class Solution {
public:
    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {
        while (root) {
            if (p->val < root->val && q->val < root->val) root = root->left;
            else if (p->val > root->val && q->val > root->val) root = root->right;
            else return root;
        }
        return nullptr;
    }
};
```