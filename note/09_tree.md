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
        return left if not right else right if not left else root  # 如果左子树没有就是右子树，右子树也没有就是根
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

## 二叉树的各种遍历

主要是迭代解法的问题，递归很简单，迭代会比较绕一些。

### 144. 二叉树的前序遍历

地址：[144. 二叉树的前序遍历](https://leetcode.cn/problems/binary-tree-preorder-traversal/submissions/)

递归解法：

```python
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def dfs(node):
            if not node:
                return
            res.append(node.val)
            dfs(node.left)
            dfs(node.right)

        dfs(root)
        return res
```

迭代解法：

```python
class Solution:
    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, st = [], []
        if not root:
            return res
        st.append(root)
        while st:
            cur = st.pop()
            res.append(cur.val)
            if cur.right:
                st.append(cur.right)
            if cur.left:
                st.append(cur.left)
        return res
```

### 145. 二叉树的后序遍历

地址：[145. 二叉树的后序遍历](https://leetcode.cn/problems/binary-tree-postorder-traversal/)

递归方法：

```python
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res = []

        def dfs(node):
            if not node:
                return
            if node.left:
                dfs(node.left)
            if node.right:
                dfs(node.right)
            res.append(node.val)

        dfs(root)
        return res
```

迭代方法：

```python
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, st = deque(), []
        if not root:
            return list(res)
        st.append(root)
        while st:
            cur = st.pop()
            res.appendleft(cur.val)
            if cur.left:
                st.append(cur.left)
            if cur.right:
                st.append(cur.right)
        return list(res)
```

### 94. 二叉树的中序遍历

地址：[94. 二叉树的中序遍历](https://leetcode.cn/problems/binary-tree-inorder-traversal/)

递归方法：

```python
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
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
        return res
```

迭代解法：

```python
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        res, st = [], []
        cur = root
        while cur or st:
            while cur:
                st.append(cur)
                cur = cur.left
            cur = st.pop()
            res.append(cur.val)
            cur = cur.right
        return res
```
