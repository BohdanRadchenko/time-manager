const selectDay = (options) => {
  const day = new Date().getDay()
  return options.filter(el => el.value === day-1)[0]
}

export default selectDay