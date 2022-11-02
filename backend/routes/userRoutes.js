const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getMe, getUser, updateMe } = require('../controller/userController')
const { protect, isAdmin } = require('../middleware/auth')

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getMe)
router.get('/:userId', protect, isAdmin, getUser)
router.put('/', protect, updateMe)

module.exports = router
