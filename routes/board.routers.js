const {Router} = require('express')
const Board = require('../models/Board')
const router = Router()
const defaultLists = require('../config/lists')

// /api/v1/boards/create
router.post('/create', async (req, res) => {
  try {
    const {title} = req.body
    console.log(title)
    const board = new Board({lists: defaultLists, title})
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
        .json({message: `error post register ${e.message}`})
  }
})

// /api/v1/boards/patch/:id
router.patch('/patch/:id', async (req, res) => {
  try {
    const boardId = req.params.id
    const lists = req.body.lists
    console.log('boardId', boardId)
    console.log('lists', lists)
    // await Board.where({_id: boardId})
    //     .update({lists: lists})
    const board = await Board.findById(req.params.id)
    res.status(200).json({message: 'Board upgrade', board})
  } catch (e) {
    res.status(500)
        .json({message: `error get users by id ${e.message}`})
  }
})


module.exports = router;