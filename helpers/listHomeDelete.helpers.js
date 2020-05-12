const listHomeDelete = (lists, listId) => {
  return lists.filter(el => el.id !== listId)
}

module.exports = listHomeDelete