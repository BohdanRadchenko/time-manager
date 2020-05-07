const {Router} = require('express')
const Board = require('../models/Board')
const router = Router()
const defaultLists = require('../config/lists')

// /api/v1/boards/create
router.post('/create', async (req, res) => {
  try {
    const {title} = req.body
    console.log(title)
    const board = new Board({lists : defaultLists, title})
    await board.save()
    const boards = await Board.find()
    res.status(201).json({message: `board - lists - create`, boards})
  } catch (e) {
    res.status(500).json({message: `error post create board ${e.message}`})
  }
})

// /api/v1/boards/get
router.get('/get', async (req, res) => {
  try {
    const boards = await Board.find()
    res.status(200).json({message : 'ok', boards})
  } catch (e) {
    res.status(500).json({message: `error post register ${e.message}`})
  }
})

module.exports = router;