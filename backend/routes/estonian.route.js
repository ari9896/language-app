import express from 'express'

import { getNouns } from '../controllers/estonian.controller.js'

const router = express.Router();

router.post('') // upload a new Estonian noun. Should be admin only.

// the retrieve set of routes
router.get('/nouns', getNouns)

// retrieve according to a parameter

// add to a specific user

export default router;
