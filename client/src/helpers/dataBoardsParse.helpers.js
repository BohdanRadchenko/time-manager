import monthOptions from '../components/DateSelector/monthOptions'

const dataBoardsParse = data => {
  if (!data) return
  const date = new Date(data)
  const week = date.getUTCDay()
  const day = date.getUTCDate()
  // const month = date.getUTCMonth()
  const month = monthOptions.find(el => el.value === date.getUTCMonth()).label
  const year = date.getUTCFullYear()
  return {week, day, month, year}
}

export default dataBoardsParse