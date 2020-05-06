const {Router} = require('express')
const router = Router()

// /api/v1/board
router.post('/board', async (req, res) => {
  try {
    const {email, name} = req.body
    const user = new User({email, name})
    await user.save()
    res.status(201).json({message: `User - ${email} - has been created`})
  } catch (e) {
    res.status(500).json({message: `error post register ${e.message}`})
  }
})

module.exports = router;