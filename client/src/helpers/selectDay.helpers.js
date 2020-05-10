export const selectWeekDay = (options) => {
  const day = new Date().getDay()
  if (day === 0) {
    return options.find(el => el.value === 6)
  }
  return options.find(el => el.value === day - 1)
}

export const selectMonth = (options) => {
  const month = new Date().getMonth()
  return options.find(el => el.value === month )
}

export const selectNumberDay = (options) => {
  const day = new Date().getDate()
  return options.find(el => el.value === day )
}
