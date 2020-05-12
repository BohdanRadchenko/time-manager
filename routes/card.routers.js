const {Router} = require('express')
const Board = require('../models/Board')
const createCard = require('../helpers/cards.helpers')
const createHomeCard = require('../helpers/cardsHome.helpers')
const cardsHomeDelete = require('../helpers/cardsHomeDelete.helpers')
const router = Router()

// /api/v1/cards/create
router.post('/create', async (req, res) => {
  try {
    const boardId = req.body.id
    const card = req.body.card
    const board = await Board.findById(boardId)
    const lists = createCard(board.lists, card)
    await Board.where({_id: boardId})
        .update({lists: lists})
    const newBoard = await Board.findById(boardId)
    res.status(200).json({message: 'Card create', board : newBoard})
  } catch (e) {
    res.status(500)
        .json({message: `error create card ${e.message}`})
  }
})

// /api/v1/cards/home/create
router.post('/home/create', async (req, res) => {
  try {
    const card = req.body.card
    const boardId = card.boardId
    const board = await Board.findById(boardId)
    const lists = createHomeCard(board.lists, card)
    await Board.where({_id: boardId})
        .update({lists: lists})
    const newBoard = await Board.findById(boardId)
    res.status(200).json({message: 'Card create', board : newBoard})
  } catch (e) {
    res.status(500)
        .json({message: `error create card ${e.message}`})
  }
})

// /api/v1/cards/home/delete
router.post('/home/delete', async (req, res) => {
  try {
    const form = req.body.form
    const boardId = form.boardId
    const listId = form.listId
    const cardId = form.cardId
    const board = await Board.findById(boardId)
    const lists = cardsHomeDelete(board.lists, listId, cardId)
    await Board.where({_id: boardId})
        .update({lists: lists})
    const newBoard = await Board.findById(boardId)
    res.status(200).json({message: 'Card delete', board : newBoard})
  } catch (e) {
    res.status(500)
        .json({message: `error delete card ${e.message}`})
  }
})


module.exports = router;