/* 给定一个只包括'('，')'，'{'，'}'，'['，']'的字符串，判断字符串是否有效。
有效字符串需满足：
左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。 */

const isValid = str => {
  const strArr = str.split('')
  if (strArr.length % 2 !== 0) return false
  const stack = []
  for (let i = 0; i < strArr.length; i++) {
    const item = strArr[i]
    if (item === '(' || item === '[' || item === '{') stack.push(item)
    else {
      const l = stack[stack.length - 1]
      if ((l === '(' && item === ')') || (l === '[' && item === ']') || (l === '{' && item === '}')) stack.pop()
      else return false
    }
  }
  return stack.length === 0
}

const res = isValid('()[]{}')
console.log(res)
