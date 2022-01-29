import express from 'express'
import { authenticateAccessToken } from '../../../middlewares/AuthenticateAccessOrRefreshTokens'
import { checkUserIsFound } from '../../../middlewares/CheckUserIsFound'
import UserOrders from '../../../controllers/User/Orders'

const userOrders = new UserOrders()

const router = express.Router()
router.post('/handle-order', authenticateAccessToken, checkUserIsFound, userOrders.handleUserOrderWithCardOrCashPaymentController)

router.get('/get-orders', authenticateAccessToken, checkUserIsFound, userOrders.getUserOrders)

module.exports = router
