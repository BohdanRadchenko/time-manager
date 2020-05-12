const cardsHomeDelete = (lists, listId, cardId) => {
  const newList = lists.find(el => el.id === listId)
  newList.cards = newList.cards.filter(el => el.id !== cardId)
  const result = lists.map(el => {
    if (el.id === listId) {
      return newList
    }
    return el
  })
  return result
}

module.exports = cardsHomeDelete