const shortId = require('shortid')

const createHomeCard = (lists, title) => {
  const newList = {
    id: shortId.generate(),
    title: title,
    type : 'home',
    cards: []
  }
  lists.push(newList)
  return lists
}

module.exports = createHomeCard