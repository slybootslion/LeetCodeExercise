const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd'
        },
        {
          val: 'e'
        }
      ]
    },
    {
      val: 'c',
      children: [
        {
          val: 'f'
        },
        {
          val: 'g'
        }
      ]
    }
  ]
}

const dfs = (tree) => {
  console.log(tree.val)
  tree.children && tree.children.forEach(dfs) // 简写，相当于 tree.children.forEach(item => dfs(item))
}

dfs(tree)

const bfs = (tree) => {
  const arr = [tree]
  while (arr.length) {
    const item = arr.shift()
    console.log(item.val)
    item.children && item.children.forEach(item => arr.push(item))
  }
}

bfs(tree)
