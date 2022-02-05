import express from 'express'
import { checkUserIsAdmin } from '../../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { getAllMemoryController, insertMemoryProduct } from '../../../../controllers/Admin/Memory/Memory'

const router = express.Router()

router.get('/get-all', checkUserIsAdmin, getAllMemoryController)
router.post('insert', checkUserIsAdmin, insertMemoryProduct)

module.exports = router
