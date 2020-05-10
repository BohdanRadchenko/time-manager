const {Router} = require('express')
const Board = require('../models/Board')
const router = Router()
const defaultLists = require('../helpers/lists')
const listsCreate = require('../helpers/listsCreate.helpers')
const boardsCreate = require('../helpers/boardsCreate.helpers')

// /api/v1/boards/create
router.post('/create', async (req, res) => {
  try {
    const {title, type} = req.body
    const newLists = listsCreate(req.body, type)
    const newBoard = boardsCreate('author', title, newLists, type)
    const board = new Board({
      lists: newBoard.lists,
      title :newBoard.title,
      dateStart :newBoard.dateStart,
      dateEnd :newBoard.dateEnd,
      type : newBoard.type
    })
    await board.save()
    const boards = await Board.find()
    res.status(201).json({message: `board - lists - create`, boards})
  } catch (e) {
    res.status(500)
        .json({message: `error post create board ${e.message}`})
  }
})

// /api/v1/boards/all
router.get('/all', async (req, res) => {
  try {
    const boards = await Board.find()
    res.status(200).json({message: 'ok', boards})
  } catch (e) {
    res.status(500)
        .json({message: `error post register ${e.message}`})
  }
})

// /api/v1/boards/get/:id
router.get('/get/:id', async (req, res) => {
  try {
    const board = await Board.findById(req.params.id)
    res.status(200).json({message: 'ok', board})
  } catch (e) {
    res.status(500)
        .json({message: `error get boards by id ${e.message}`})
  }
})

// /api/v1/boards/patch/:id
router.patch('/patch/:id', async (req, res) => {
  try {
    const boardId = req.params.id
    const lists = req.body.lists
    await Board.where({_id: boardId})
        .updateOne({lists: lists})
    const board = await Board.findById(req.params.id)
    res.status(200).json({message: 'Board upgrade', board})
  } catch (e) {
    res.status(500)
        .json({message: `error patch boards by id ${e.message}`})
  }
})

// /api/v1/boards/:id
router.delete('/:id', async (req, res) => {
  try {
    console.log('work delete board router delete ')
    await Board.findById(req.params.id).deleteOne()
    const boards = await Board.find()
    res.status(200).json({message: 'delete board by id', boards})
  } catch (e) {
    res.status(500)
        .json({message: `error delete boards by id ${e.message}`})
  }
})


module.exports = router;