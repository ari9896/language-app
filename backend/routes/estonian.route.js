import express from 'express'

import { getNouns } from '../controllers/estonian.controller.js'

const router = express.Router();

router.get('/nouns', getNouns)

export default router;
