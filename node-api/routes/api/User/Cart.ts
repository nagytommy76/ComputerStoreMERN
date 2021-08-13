import express, { Request, Response } from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { addCartItemsToUserController, fetchUserCartItemsController, removeItemController } from '../../../controllers/Cart/Cart'

const router = express.Router()
router.get('/fetch-items', authenticateAccessToken, fetchUserCartItemsController)
router.post('/add-items', authenticateAccessToken, addCartItemsToUserController)
router.delete('/remove-item', authenticateAccessToken, removeItemController)

module.exports = router
