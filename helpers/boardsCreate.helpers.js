const shortid = require('shortid')

const boardsCreate = (author, title, newLists, type) => {
  const data = {
    title,
    author,
    type,
    dateStart : newLists.find(el => el.id === 'list-0').date,
    dateEnd : newLists.find(el => el.id === 'list-6').date,
    lists : type === 'work' ? newLists : [
      {
        id: shortid.generate(),
        type,
        title: 'New lists...',
        cards: [],
      }
      ]
  }

  return data
}

module.exports = boardsCreate