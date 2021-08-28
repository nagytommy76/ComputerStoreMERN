import express from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import {
   addCartItemsToUserController,
   fetchUserCartItemsController,
   removeItemController,
   increadeDecreaseItemQtyController,
   fillDBWithCartItemsAfterLoginController
} from '../../../controllers/Cart/Cart'

const router = express.Router()
router.get('/fetch-items', authenticateAccessToken, fetchUserCartItemsController)
router.post('/add-items', authenticateAccessToken, addCartItemsToUserController)
router.post('/fill-items', authenticateAccessToken, fillDBWithCartItemsAfterLoginController)
router.patch('/quantity', authenticateAccessToken, increadeDecreaseItemQtyController)
router.delete('/remove-item', authenticateAccessToken, removeItemController)

module.exports = router
