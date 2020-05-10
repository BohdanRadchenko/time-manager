export const selectWeekDay = (options) => {
  const day = new Date().getDay()
  return options.filter(el => el.value === day-1)[0]
}

export const selectMonth = (options) => {
  const month = new Date().getMonth()
  return options.find(el => el.value === month )
}

export const selectNumberDay = (options) => {
  const day = new Date().getDate()
  return options.find(el => el.value === day )
}
