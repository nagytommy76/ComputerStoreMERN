import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { getAllMemoryController } from '../../../../controllers/Admin/Memory/Memory'

const router = express.Router()

router.get('/get-all', checkUserIsAdmin, getAllMemoryController)

module.exports = router
