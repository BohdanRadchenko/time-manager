const drawCardTimeParse = (h, m) => {
  const hour = h < 10 ? `0${h}` : h
  const min = m < 10 ? `0${m}` : m
  return {hour, min}
}

export default drawCardTimeParse