const {Router} = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()

// /api/v1/auth/register
router.post('/register',
    [
      check('email', 'Incorrect email address').isEmail(),
      check('password', 'Min length password 6 ').isLength({min: 6}),
    ],
    async (req, res) => {
      try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({
            errors: errors.array(),
            message: 'Incorrect email address or password in register'
          })
        }
        const {email, name, password, passwordAgain} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
          return res.status(400).json({message: 'User already exist'},)
          return res.json({error: 'User already exist'})
        }
        if (password !== passwordAgain) {
          return res.status(400).json({message: "Incorrect password"})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword, name})
        await user.save()

        const newUser = await User.findOne({email})
        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '24h'}
        )
        res.status(201).json({
          token,
          userData: {id: newUser._id, name: newUser.name, email: newUser.email},
          message: `User - ${email} - has been created`
        })
      } catch (e) {
        res.status(500).json({message: `error post register ${e.message}`})
      }
    })

// /api/v1/auth/login
router.post(
    '/login',
    [
      check('email', 'Enter correct email').normalizeEmail().isEmail(),
      check('password', 'Empty password').exists()
    ],
    async (req, res) => {
      try {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
          return res.status(400).json({
            errors: errors.array(),
            message: 'Incorrect email address or password in Log In'
          })
        }
        const {email, password} = req.body
        const user = await User.findOne({email})
        if (!user) {
          return res.status(400).json({message: 'User not found'})
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
          return res.status(400).json({message: 'Incorrect password'})
        }
        const token = jwt.sign(
            {userId: user.id},
            config.get('jwtSecret'),
            {expiresIn: '24h'}
        )
        res.json({token, userData: {id: user._id, name: user.name, email: user.email}})
      } catch (e) {
        res.status(500).json({message: `error post login ${e.message}`})
      }
    })

// /api/v1/auth/login/res
router.get('/relogin', auth, async (req, res) => {
  const token = req.user.token
  const user = await User.findById(req.user.decoded.userId)
  res.json({token, userData: {id: user._id, name: user.name, email: user.email}})
})

module.exports = router;