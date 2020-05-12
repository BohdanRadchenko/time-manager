const listsTitleUpdate = (lists, listId, title) => {
  const newList = lists.find(el => el.id === listId)
  newList.title = title
  const result = lists.map(el => {
    if (el.id === listId) return newList
    return el
  })
  return result
}

module.exports = listsTitleUpdate