import express from 'express'
import { HighlightController } from '../../../controllers/Highlight/Highlight'

const router = express.Router()

router.get('/get-highlight', HighlightController)

module.exports = router
