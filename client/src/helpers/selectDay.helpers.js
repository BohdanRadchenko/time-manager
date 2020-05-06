const selectDay = (options) => {
  console.log(options)
  const day = new Date().getDay()
  console.log(day)
  return options.filter(el => el.value === day)
}

export default selectDay