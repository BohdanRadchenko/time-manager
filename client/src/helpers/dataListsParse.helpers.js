const options = [
  {value: 1, label: 'Mon'},
  {value: 2, label: 'Tue'},
  {value: 3, label: 'Wed'},
  {value: 4, label: 'Thu'},
  {value: 5, label: 'Fri'},
  {value: 6, label: 'Sat'},
  {value: 0, label: 'Sun'},
];

const dataListsParse = data => {
  if (!data) return
  const date = new Date(data)
  // const week = date.getUTCDay()
  const week = options.find(el => el.value === date.getUTCDay()).label
  // const day = date.getUTCDate()
  const day = date.getUTCDate() < 10
      ? `0${date.getUTCDate()}`
      : date.getUTCDate()
  // const month = date.getUTCMonth() + 1
  const month = (date.getUTCMonth() + 1) < 10
      ? `0${date.getUTCMonth() + 1}`
      : date.getUTCMonth() + 1
  const year = date.getUTCFullYear()
  return {week, day, month, year}
}

export default dataListsParse