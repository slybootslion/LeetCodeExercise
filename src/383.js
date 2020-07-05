const canConstruct = (ransomNote, magazine) => {
  for (let i = 0; i < ransomNote.length; i++) {
    if (magazine.indexOf(ransomNote[i]) === -1) return false
    magazine = magazine.replace(ransomNote[i], '')
  }
  return true
}

canConstruct('aa', 'aab')
