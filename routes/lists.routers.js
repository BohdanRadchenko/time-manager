const {Router} = require('express')
const Board = require('../models/Board')
const createHomeLists = require('../helpers/listsHome.helpers')
const listsTitleUpdate = require('../helpers/listsHomeTitleUpdate.helpers')
const listHomeDelete = require('../helpers/listHomeDelete.helpers')
const router = Router()

// /api/v1/lists/home/create
router.post('/home/create', async (req, res) => {
  try {
    const card = req.body.card
    const boardId = card.boardId
    const board = await Board.findById(boardId)
    const lists = createHomeLists(board.lists, card.title)
    await Board.where({_id: boardId})
        .update({lists: lists})
    const newBoard = await Board.findById(boardId)
    res.status(200).json({message: 'Card create', board : newBoard})
  } catch (e) {
    res.status(500)
        .json({message: `error create card ${e.message}`})
  }
})

// /api/v1/lists/home/update
router.post('/home/update', async (req, res) => {
  try {
    const form = req.body.form
    const boardId = form.boardId
    const board = await Board.findById(boardId)
    const lists = listsTitleUpdate(board.lists, form.listId, form.title)
    await Board.where({_id: boardId})
        .update({lists: lists})
    const newBoard = await Board.findById(boardId)
    res.status(200).json({message: 'Card create', board : newBoard})
  } catch (e) {
    res.status(500)
        .json({message: `error create card ${e.message}`})
  }
})

// /api/v1/lists/home/delete
router.post('/home/delete', async (req, res) => {
  try {
    const form = req.body.form
    const boardId = form.boardId
    const board = await Board.findById(boardId)
    const lists = listHomeDelete(board.lists, form.listId)
    await Board.where({_id: boardId})
        .update({lists: lists})
    const newBoard = await Board.findById(boardId)
    res.status(200).json({message: 'Card create', board : newBoard})
  } catch (e) {
    res.status(500)
        .json({message: `error delete list ${e.message}`})
  }
})


module.exports = router;