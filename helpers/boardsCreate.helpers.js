const boardsCreate = (author, title, newLists) => {
  const data = {
    title,
    dateStart : newLists.find(el => el.id === 'list-0').date,
    dateEnd : newLists.find(el => el.id === 'list-6').date,
    author,
    lists : newLists
  }

  return data
}

module.exports = boardsCreate