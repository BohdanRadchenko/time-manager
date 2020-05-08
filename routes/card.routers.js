const {Router} = require('express')
const Board = require('../models/Board')
const createCard = require('../helpers/cards.helpers')
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
        .json({message: `error get users by id ${e.message}`})
  }
})


module.exports = router;