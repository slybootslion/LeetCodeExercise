const replaceSpace = (s) => {
  // return s.split(' ').join('%20')
  return s.replace(/\s+/g, '%20')
}

console.log(replaceSpace('We are happy.'))
