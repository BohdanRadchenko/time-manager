const createCard = (lists, card) => {
  const newList =  lists.find(list => list.id.includes(String(card.day)))
  const newCard = {...card, id : `cards-${card.day}${newList.cards.length}`}
  delete newCard.day
  newList.cards.push(newCard)
  const result = lists.map(list => {
    if(list.id === newList.id) {
      return newList
    }
    return list
  })
  return result
}

module.exports = createCard