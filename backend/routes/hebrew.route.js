import express from 'express'

import { 
  getVerbs, 
  getVerb, 
  uploadVerb,
  getAvailableVerbs
 } from '../controllers/hebrew.controller.js'

const router = express.Router();

/*router.get('/nouns', getNouns)*/
router.get('/verbs', getVerbs) // admin only
router.get('/get-all-verbs-available', getAvailableVerbs)
router.get('/verb/:id', getVerb)
// get verbs according to preposition

// Admin routes only.
router.post('/verb-upload', uploadVerb)

export default router;
