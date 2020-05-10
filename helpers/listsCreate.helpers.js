const dayArray = [
  {id: 0, title: 'Monday'},
  {id: 1, title: 'Tuesday'},
  {id: 2, title: 'Wednesday'},
  {id: 3, title: 'Thursday'},
  {id: 4, title: 'Friday'},
  {id: 5, title: 'Saturday'},
  {id: 6, title: 'Sunday'}
]

const listsCreate = ({startValueDay, startValueMonth, type}) => {
  const day = startValueDay
  const month = startValueMonth
  const year = new Date().getFullYear()

  const dateStarter = (id) => {
    const d = new Date(year, month, day + 1)
    const dateStart = d.setDate(d.getDate())
    if(id !== 0) {
      const dateStart = d.setDate(d.getDate() + id)
      return new Date(dateStart)
    }
    return new Date(dateStart)
  }

  const createLists = (id, title) => {
    return {
      id: `list-${id}`,
      title: title,
      date: dateStarter(id),
      type,
      cards: [
        // {
        //   id: `cards-${id}0`,
        //   title: "cards 0",
        //   hour: '12',
        //   min: '00'
        // },
        // {
        //   id: `cards-${id}1`,
        //   title: "cards 1",
        //   hour: '12',
        //   min: '00'
        // }
      ]
    }
  }

  let lists = []
  dayArray.map(el => {
    const list = createLists(el.id, el.title)
    lists.push(list)
  })

  return lists
}

module.exports = listsCreate