import express, { Request, Response } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { addCartItemsToUser, removeItemController } from '../../../controllers/Cart/Cart'

const router = express.Router()
router.post('/add-items', authenticateAccessToken, addCartItemsToUser)
router.delete('/remove-item', authenticateAccessToken, removeItemController)

module.exports = router
