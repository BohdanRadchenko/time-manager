const shortid = require('shortid');

const createHomeCard = (lists, card) => {
  const newList =  lists.find(list => list.id === card.listId)
  const newCard = {title : card.value, id : `c-${shortid.generate()}`}
  newList.cards.push(newCard)
  const result = lists.map(list => {
    if(list.id === newList.id) {
      return newList
    }
    return list
  })
  return result
}

module.exports = createHomeCard