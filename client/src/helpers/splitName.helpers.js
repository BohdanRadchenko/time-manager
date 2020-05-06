const splitName = (name) => {
  if(!name) return;
  const s = name.split(' ')
  if(s.length < 2) {
    return `${s[0].split('')[0]}`
  } else {
    return `${s[0].split('')[0]}${s[1].split('')[0]}`
  }
}

export default splitName