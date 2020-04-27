const {Router} = require('express')
const config = require('config')
const User = require('../models/User')
const router = Router()

// /api/v1/user
router.post('/user', async (req, res) => {
        try {
            const {email, name} = req.body
            const user = new User({email, name})
            await user.save()
            res.status(201).json({message: `User - ${email} - has been created`})
        } catch (e) {
            res.status(500).json({message: `error post register ${e.message}`})
        }
    })

router.get('/user', async (req, res) => {
        try {
            console.log('get')
            const user = await User.find()
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json({message: `error post register ${e.message}`})
        }
    })

module.exports = router;