const boardsCreate = (author, title, newLists, type) => {
  const data = {
    title,
    dateStart : newLists.find(el => el.id === 'list-0').date,
    dateEnd : newLists.find(el => el.id === 'list-6').date,
    author,
    lists : type === 'work' ? newLists : [
      {
        id: `list-0`,
        type,
        title: title,
        cards: [],
      }
      ],
    type
  }

  return data
}

module.exports = boardsCreate