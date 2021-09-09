import express from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkUserIsFound } from '../../../middlewares/CheckUserIsFound'
import {
   addCartItemsToUserController,
   fetchUserCartItemsController,
   removeItemController,
   increadeDecreaseItemQtyController,
   fillDBWithCartItemsAfterLoginController
} from '../../../controllers/Cart/Cart'

const router = express.Router()
router.get('/fetch-items', authenticateAccessToken, checkUserIsFound, fetchUserCartItemsController)
router.post('/add-items', authenticateAccessToken, checkUserIsFound, addCartItemsToUserController)
router.post('/fill-items', authenticateAccessToken, checkUserIsFound, fillDBWithCartItemsAfterLoginController)
router.patch('/quantity', authenticateAccessToken, checkUserIsFound, increadeDecreaseItemQtyController)
router.delete('/remove-item', authenticateAccessToken, checkUserIsFound, removeItemController)

module.exports = router
