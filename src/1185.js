const dict = { 0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday' }

const dayOfTheWeek = (day, month, year) => {
  const d = new Date(`${year}-${month}-${day}`).getDay()
  return dict[d]
}

console.log(dayOfTheWeek(31, 8, 2019))
