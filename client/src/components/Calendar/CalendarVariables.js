
export const dayNames = [
  {value: 1, label: 'Mon', title : 'Monday'},
  {value: 2, label: 'Tue', title : 'Tuesday'},
  {value: 3, label: 'Wed', title : 'Wednesday'},
  {value: 4, label: 'Thu', title : 'Thursday'},
  {value: 5, label: 'Fri', title : 'Friday'},
  {value: 6, label: 'Sat', title : 'Saturday'},
  {value: 0, label: 'Sun', title : 'Sunday'},
];

export const monthOptions = [
  {value: 0, label: 'Jan'},
  {value: 1, label: 'Feb'},
  {value: 2, label: 'Mar'},
  {value: 3, label: 'Apr'},
  {value: 4, label: 'May'},
  {value: 5, label: 'Jun'},
  {value: 6, label: 'Jul'},
  {value: 7, label: 'Aug'},
  {value: 8, label: 'Sep'},
  {value: 9, label: 'Oct'},
  {value: 10, label: 'Nov'},
  {value: 11, label: 'Dec'},
];

export const currentTime = () => {
  const date = new Date()
  const dayWeek = dayNames.find(el => el.value === date.getDay()).title
  const month = monthOptions.find(el => el.value === date.getMonth()).label
  const day = date.getDate()
  return {dayWeek, day, month}
}

export const monthName = (month) => {
  const mon = monthOptions.find(el => el.value === month)
  return mon.label
}

export const getDay = date => {
  let day = date.getDay();
  if (day === 0) return day = 7;
  return day - 1;
}

export const getCalendarArray = (d, month, year) => {
  const mon = month
  const arr = []

  for (let i = 0; i < getDay(d); i++) {
    const date = new Date(year, month)
    const newDate = date.setDate(date.getDate() - (
        getDay(d) - i
    ))
    arr.push({
      type: 'prev',
      value: new Date(newDate).getDate(),
      id: `prev-${new Date(newDate).getDate()}`
    })
  }

  while (d.getMonth() === mon) {
    arr.push({
      type: 'current',
      value: d.getDate(),
      id: `current-${d.getDate()}`
    })
    d.setDate(d.getDate() + 1);
  }

  if (getDay(d) !== 0) {
    for (let i = getDay(d); i < 7; i++) {
      d.setDate(d.getDate() + 1)
      arr.push({
        type: 'next',
        value: d.getDate() - 1,
        id: `next-${d.getDate() - 1}`
      })
    }
  }

  return arr
}