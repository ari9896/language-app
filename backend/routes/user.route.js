import express from 'express'

import { 
  signup,
  login,
  
  addHebrewVerb
} from '../controllers/user.controller.js'

const router = express.Router();

router.get('/test', (req, res) => {
  res.json({ success: true, message: "the route was accessed succesfully", object: "pretend there's an object  here" })
})

// routes that have to do with authentication
router.post('/signup', signup)
router.post('/login', login)

// routes that update word consortiumsz
router.patch('/hebrew-verb-update', addHebrewVerb)

export default router  